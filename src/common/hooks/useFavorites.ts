// hooks/useFavorites.ts
import { useDispatch, useSelector } from 'react-redux';

import {addFavorite, removeFavorite, selectFavorites, selectIsFavorite} from "@/common/store/favoritesSlice.ts";
import type {Movie} from "@/features/movies/api/movieApi.types.ts";


export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    const addToFavorites = (movie: Movie) => {
        dispatch(addFavorite(movie));
        // Можно добавить уведомление
        console.log(`Фильм "${movie.title}" добавлен в избранное`);
    };

    const removeFromFavorites = (movieId: number) => {
        const movie = favorites.find(m => m.id === movieId);
        dispatch(removeFavorite(movieId));
        if (movie) {
            console.log(`Фильм "${movie.title}" удален из избранного`);
        }
    };

    const isFavorite = (movieId: number) => {
        return useSelector((state) => selectIsFavorite(state, movieId));
    };

    const toggleFavorite = (movie: Movie) => {
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return {
        favorites,
        addFavorite: addToFavorites,
        removeFavorite: removeFromFavorites,
        toggleFavorite,
        isFavorite,
    };
};