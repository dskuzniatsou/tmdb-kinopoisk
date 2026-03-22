import {Route, Routes} from "react-router";

export const Path = {
    Main: '/',
    Movies: '/movies',
    Filtered_Movies: '/filtered-movies',
    Search: '/search',
    Favorites: '/favorites',
    NotFound: '*',
} as const

export const Routing = () => (
    <Routes>
        {/*<Route path={Path.Main} element={<MainPage />} />*/}
        {/*<Route path={Path.Movies} element={<MoviesPage />} />*/}
        {/*<Route path={Path.Filtered_Movies} element={<FilteredMovies />} />*/}
        {/*<Route path={Path.Search} element={<Search />} />*/}
        {/*<Route path={Path.Favorites} element={<Favorites />} />*/}
        {/*<Route path={Path.NotFound} element={<PageNotFound />} />*/}
    </Routes>
)