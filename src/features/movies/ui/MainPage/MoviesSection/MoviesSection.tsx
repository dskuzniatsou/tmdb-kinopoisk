// components/MovieSection/MovieSection.tsx
import { useNavigate } from 'react-router-dom';

import s from './MovieSection.module.css';
import type {Movie} from "@/features/movies/api/movieApi.types.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";

interface MovieSectionProps {
    title: string;
    movies: Movie[];
    loading?: boolean;
    viewMorePath: string;
    error?: string | null;
    onViewMore?: () => void;
}

export function MovieSection({
                                 title,
                                 movies,
                                 loading = false,
                                 viewMorePath,
                                 error = null,
                                 onViewMore,
                             }: MovieSectionProps) {
    const navigate = useNavigate();

    const handleViewMore = () => {
        if (onViewMore) {
            onViewMore();
        } else {
            navigate(viewMorePath);
        }
    };

    if (loading) {
        return (
            <section className={s.section}>
                <div className={s.header}>
                    <h2 className={s.title}>{title}</h2>
                </div>
                <div className={s.loadingContainer}>
                    <div className={s.loadingSpinner} />
                    <p>Загрузка фильмов...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className={s.section}>
                <div className={s.header}>
                    <h2 className={s.title}>{title}</h2>
                </div>
                <div className={s.errorContainer}>
                    <p className={s.errorMessage}>{error}</p>
                    <button
                        onClick={handleViewMore}
                        className={s.retryButton}
                    >
                        Попробовать снова
                    </button>
                </div>
            </section>
        );
    }

    if (!movies || movies.length === 0) {
        return (
            <section className={s.section}>
                <div className={s.header}>
                    <h2 className={s.title}>{title}</h2>
                </div>
                <div className={s.emptyContainer}>
                    <p>Фильмы не найдены</p>
                </div>
            </section>
        );
    }

    const displayedMovies = movies.slice(0, 6);

    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>{title}</h2>
                <button
                    onClick={handleViewMore}
                    className={s.viewMoreButton}
                    aria-label={`Посмотреть все ${title}`}
                >
                    View More
                    {/*<svg*/}
                    {/*    className={s.arrowIcon}*/}
                    {/*    width="20"*/}
                    {/*    height="20"*/}
                    {/*    viewBox="0 0 24 24"*/}
                    {/*    fill="none"*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*>*/}
                    {/*    <path*/}
                    {/*        d="M9 18L15 12L9 6"*/}
                    {/*        stroke="currentColor"*/}
                    {/*        strokeWidth="2"*/}
                    {/*        strokeLinecap="round"*/}
                    {/*        strokeLinejoin="round"*/}
                    {/*    />*/}
                    {/*</svg>*/}
                </button>
            </div>

            <div className={s.grid}>
                {displayedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onFavoriteToggle={(movie, isFavorite) => {
                        console.log(`${movie.title} - ${isFavorite ? 'добавлен в' : 'удален из'} избранного`);
                    }} />
                ))}
            </div>

            {movies.length > 6 && (
                <div className={s.mobileViewMore}>
                    <button
                        onClick={handleViewMore}
                        className={s.viewMoreButtonMobile}
                    >
                        View More ({movies.length - 6} more)
                    </button>
                </div>
            )}
        </section>
    );
}