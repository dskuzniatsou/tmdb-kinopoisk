// pages/MoviesCategoryPage/MoviesCategoryPage.tsx
import { useEffect, useState } from 'react';
import {useSearchParams, useNavigate, useParams} from 'react-router-dom';

import styles from './MoviesCategoryPage.module.css';
import type {CategoryId} from "@/common/constants/categories.ts";
import {usePagination} from "@/common/hooks/usePagination.ts";
import {useMoviesByCategory} from "@/common/hooks/useMoviesByCategory.ts";
import {CategoryTabs} from "@/features/movies/ui/MoviesPage/CategoryTabs.tsx";
import {MoviesGrid} from "@/features/movies/ui/MoviesPage/MoviesGrid.tsx";
import {Pagination} from "@/features/movies/ui/MoviesPage/Pagination.tsx";

export function MoviesCategoryPage() {
    const navigate = useNavigate();
    const { category: categoryParam } = useParams();
    const [searchParams] = useSearchParams();

    // const navigate = useNavigate();
    // const [searchParams] = useSearchParams();
    // const [activeCategory, setActiveCategory] = useState<CategoryId>(() => {
    //     const category = searchParams.get('category');
    //     return (category as CategoryId) || 'popular';
    // });
    // Определяем активную категорию из URL
    const [activeCategory, setActiveCategory] = useState<CategoryId>(() => {
        if (categoryParam && ['popular', 'top_rated', 'upcoming', 'now_playing'].includes(categoryParam)) {
            return categoryParam as CategoryId;
        }
        return 'popular';
    });
    // Получаем номер страницы из URL
    const page = parseInt(searchParams.get('page') || '1', 10);

    const { movies, totalPages, isLoading, isFetching, error, category } = useMoviesByCategory(
        activeCategory,
        page
    );
    // const { currentPage, handlePageChange } = usePagination(1);
    // const { movies, totalPages, isLoading, isFetching, category } = useMoviesByCategory(
    //     activeCategory,
    //     currentPage
    // );
    console.log('Rendering MoviesCategoryPage:', {
        activeCategory,
        page,
        moviesCount: movies.length,
        totalPages,
        error
    });

    // Обработчик смены категории
    const handleCategoryChange = (categoryId: CategoryId) => {
        setActiveCategory(categoryId);
        navigate(`/movies/${categoryId}?page=1`);
    };
    // Обработчик смены страницы
    const handlePageChange = (newPage: number) => {
        navigate(`/movies/${activeCategory}?page=${newPage}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Обновляем URL при смене категории
    // const handleCategoryChange = (categoryId: CategoryId) => {
    //     setActiveCategory(categoryId);
    //     handlePageChange(1);
    //     navigate(`/movie/${categoryId}?page=1`);
    // };

    // // Синхронизируем категорию с URL при загрузке
    // useEffect(() => {
    //     const categoryFromUrl = searchParams.get('category');
    //     if (categoryFromUrl && categoryFromUrl !== activeCategory) {
    //         setActiveCategory(categoryFromUrl as CategoryId);
    //     }
    // }, [searchParams, activeCategory]);


    // Если ошибка, показываем сообщение
    if (error) {
        console.error('API Error:', error);
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.errorContainer}>
                        <h2>Ошибка загрузки фильмов</h2>
                        <p>Пожалуйста, проверьте подключение к интернету и API ключ</p>
                        <button onClick={() => window.location.reload()}>
                            Обновить страницу
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Movies</h1>
                    <p className={styles.subtitle}>
                        Browse through our collection of movies
                    </p>
                </div>

                <CategoryTabs
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />

                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {/*{category?.label}*/}
                        {category?.label || activeCategory}
                    </h2>
                    <span className={styles.resultsCount}>
                        {/*Page {currentPage} of {totalPages}*/}
                        {movies.length} фильмов • Страница {page} из {totalPages}
                    </span>
                </div>

                <MoviesGrid movies={movies} isLoading={isLoading} />

                {!isLoading && totalPages > 1 && (
                    <Pagination
                        currentPage={page}
                        totalPages={Math.min(totalPages, 500)}
                        onPageChange={handlePageChange}
                    />
                )}

                {isFetching && !isLoading && (
                    <div className={styles.fetchingIndicator}>
                        Загрузка...
                    </div>
                )}
            </div>
        </div>
    );
}