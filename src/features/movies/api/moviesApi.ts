import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {Movie, MoviesResponse} from "@/features/movies/api/movieApi.types.ts";

export const moviesApi = createApi({
    // `reducerPath` - имя куда будут сохранены состояние и экшены для этого `API`
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            // 'API-KEY': import.meta.env.VITE_API_KEY,
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
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
        // Получение популярных фильмов
        getPopularMovies: build.query<MoviesResponse, number | void>({
            query: (page = 1) => ({
                method: 'get',
                url: `movie/popular?page=${page}`,
            }),
        }),
        // Получение топ-рейтинговых фильмов
        getTopRatedMovies: build.query<MoviesResponse, number | void>({
            query: (page = 1) => `movie/top_rated?page=${page}`,
        }),

        // Получение предстоящих фильмов
        getUpcomingMovies: build.query<MoviesResponse, number | void>({
            query: (page = 1) => `movie/upcoming?page=${page}`,
        }),
        // Получение фильмов в прокате
        getNowPlayingMovies: build.query<MoviesResponse, number | void>({
            query: (page = 1) => `movie/now_playing?page=${page}`,
        }),

        // Поиск фильмов
        searchMovies: build.query<MoviesResponse, string>({
            query: (query) => `search/movie?query=${encodeURIComponent(query)}`,
        }),
    }),
})

// `createApi` создает объект `API`, который содержит все эндпоинты в виде хуков,
// определенные в свойстве `endpoints`
export const { useGetPopularMoviesQuery,
    useGetRandomPopularMovieQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useSearchMoviesQuery,
    useLazySearchMoviesQuery } = moviesApi