// store/favoritesSlice.ts
import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {Movie} from "@/features/movies/api/movieApi.types.ts";


interface FavoritesState {
    items: Movie[];
}

const initialState: FavoritesState = {
    items: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movie>) => {
            const exists = state.items.some(movie => movie.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.items));
            }
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(movie => movie.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.items));
        },
        clearFavorites: (state) => {
            state.items = [];
            localStorage.removeItem('favorites');
        },
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

export const selectFavorites = (state: any) => state.favorites.items;
export const selectIsFavorite = (state: any, movieId: number) =>
    state.favorites.items.some((movie: Movie) => movie.id === movieId);

export default favoritesSlice.reducer;