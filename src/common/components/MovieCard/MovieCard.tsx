// components/MovieCard/MovieCard.tsx
import { useNavigate } from 'react-router-dom';
import { Movie } from '@/types/movie';
import { IMAGE_BASE_URL, IMAGE_SIZES } from '@/constants/api';
import styles from './MovieCard.module.css';

interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
    const navigate = useNavigate();

    const posterUrl = movie.poster_path
        ? `${IMAGE_BASE_URL}/${IMAGE_SIZES.poster}${movie.poster_path}`
        : '/placeholder-poster.jpg';

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <img
                src={posterUrl}
                alt={movie.title}
                className={styles.poster}
                loading="lazy"
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{movie.title}</h3>
                <div className={styles.details}>
                    <span className={styles.year}>
                        {movie.release_date?.split('-')[0] || 'N/A'}
                    </span>
                    <span className={styles.rating}>
                        ★ {movie.vote_average?.toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
}