// pages/MoviesCategoryPage/components/MoviesGrid.tsx

import styles from './MoviesGrid.module.css';
import type {Movie} from "@/features/movies/api/movieApi.types.ts";
import {MovieCard} from "@/common/components/MovieCard/MovieCard.tsx";

interface MoviesGridProps {
    movies: Movie[];
    isLoading: boolean;
}

export function MoviesGrid({ movies, isLoading }: MoviesGridProps) {
    // if (isLoading) {
    //     return (
    //         <div className={styles.grid}>
    //             {[...Array(12)].map((_, index) => (
    //                 <MovieCardSkeleton key={index} />
    //             ))}
    //         </div>
    //     );
    // }

    if (movies.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Фильмы не найдены</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}