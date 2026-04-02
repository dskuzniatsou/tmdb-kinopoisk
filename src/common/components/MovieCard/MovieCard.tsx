// components/MovieCard/MovieCard.tsx
import { useNavigate } from 'react-router-dom';


import styles from './MovieCard.module.css';
import type {Movie, MoviesApiTypes} from "@/features/movies/api/movieApi.types.ts";
import {IMAGE_BASE_URL, IMAGE_SIZES} from "@/common/constants/images.ts";
// import {useFavorites} from "@/common/hooks/useFavorites.ts";

interface MovieCardProps {
    movie: MoviesApiTypes;
    onFavoriteToggle?: (movie: Movie, isFavorite: boolean) => void;
}

export function MovieCard({ movie, onFavoriteToggle }: MovieCardProps) {
    const navigate = useNavigate();
    // const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    // const isMovieFavorite = isFavorite(movie.id);
    const posterUrl = movie.poster_path
        ? `${IMAGE_BASE_URL}/${IMAGE_SIZES.poster}${movie.poster_path}`
        : '/placeholder-poster.jpg';

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };
    // const handleFavoriteClick = (e: React.MouseEvent) => {
    //     e.stopPropagation(); // Останавливаем всплытие, чтобы не сработал переход на страницу фильма
    //
    //     if (isMovieFavorite) {
    //         removeFavorite(movie.id);
    //         onFavoriteToggle?.(movie, false);
    //     } else {
    //         addFavorite(movie);
    //         onFavoriteToggle?.(movie, true);
    //     }
    // };

    const getRatingBadgeClass = (rating: number) => {
        if (rating >= 8) return styles.ratingExcellent;
        if (rating >= 6) return styles.ratingGood;
        if (rating >= 4) return styles.ratingAverage;
        return styles.ratingPoor;
    };
    const getRatingLabel = (rating: number) => {
        if (rating >= 8) return 'Отлично';
        if (rating >= 6) return 'Хорошо';
        if (rating >= 4) return 'Средне';
        return 'Низкий';
    };


    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={styles.posterContainer}>
            <img
                src={posterUrl}
                alt={movie.title}
                className={styles.poster}
                loading="lazy"
            />
                <button
                    // className={`${styles.favoriteButton} ${isMovieFavorite ? styles.favoriteActive : ''}`}
                    // // onClick={handleFavoriteClick}
                    // aria-label={isMovieFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                >
                    {/*{isMovieFavorite ? '❤️' : '🤍'}*/}
                    ❤️
                </button>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{movie.title}</h3>
                {/*<div className={styles.details}>*/}
                {/*    <span className={styles.year}>*/}
                {/*        {movie.release_date?.split('-')[0] || 'N/A'}*/}
                {/*    </span>*/}
                {/*    <span className={styles.rating}>*/}
                {/*        ★ {movie.vote_average?.toFixed(1)}*/}
                {/*    </span>*/}
                {/*</div>*/}
                <div className={`${styles.rating} ${getRatingBadgeClass(movie.vote_average)}`}>
                    <span className={styles.ratingStar}>★</span>
                    <span className={styles.ratingValue}>
                            {movie.vote_average?.toFixed(1) || 'N/A'}
                        </span>
                    <span className={styles.ratingLabel}>
                            {getRatingLabel(movie.vote_average)}
                        </span>
                </div>
            </div>
        </div>
    );
}