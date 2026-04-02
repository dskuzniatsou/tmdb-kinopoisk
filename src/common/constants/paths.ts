export const Path = {
    Main: '/',
    MoviesCategory: '/movies/:category',
    FilteredMovies: '/filtered-movies',
    Search: '/search',
    Favorites: '/favorites',
    NotFound: '*',
} as const;

export type PathKeys = keyof typeof Path;
export type PathValues = typeof Path[PathKeys];