// types/movieApi.types.ts
// export type MoviesApiTypes = {
//     id: number;
//     title: string;
//     overview: string;
//     poster_path: string | null;
//     backdrop_path: string | null;
//     release_date: string;
//     vote_average: number;
//     vote_count: number;
// }
//
// export type MovieResponse = {
//     page: number;
//     results: MoviesApiTypes[];
//     total_pages: number;
//     total_results: number;
// }
export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}