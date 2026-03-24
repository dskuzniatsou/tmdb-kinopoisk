import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {Movie, MoviesResponse} from "@/features/movies/api/movieApi.types.ts";

export const moviesApi = createApi({
    // `reducerPath` - имя куда будут сохранены состояние и экшены для этого `API`
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            'API-KEY': import.meta.env.VITE_API_KEY,
            // 'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
    }),
    endpoints: build => ({
        // Типизация аргументов (<возвращаемый тип, тип query аргументов (`QueryArg`)>)
        // `query` по умолчанию создает запрос `get` и указание метода необязательно
        // Получение одного рандомного фильма из популярных
        getRandomPopularMovie: build.query<Movie, void>({
            query: () => `movie/popular`,
            transformResponse: (response: MoviesResponse) => {
                const movies = response.results;
                // Фильтруем фильмы, у которых есть backdrop_path
                const moviesWithBackdrop = movies.filter(movie => movie.backdrop_path);
                // Выбираем случайный фильм
                const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
                return moviesWithBackdrop[randomIndex];
            },
        }),
    }),
})

// `createApi` создает объект `API`, который содержит все эндпоинты в виде хуков,
// определенные в свойстве `endpoints`
export const { useGetRandomPopularMovieQuery } = moviesApi