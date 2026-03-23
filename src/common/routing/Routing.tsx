import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/features/movies/ui/MainPage/MainPage.tsx";
import {MoviesCategoryPage} from "@/features/movies/ui/MoviesPage/MoviesCategoryPage.tsx";
import {FilteredMoviesPage} from "@/features/movies/ui/FilteredMoviesPage/FilteredMoviesPage.tsx";
import {FavoritesPage, PageNotFound, SearchPage} from "@/common/components";
import {Path} from "@/common/constants";


export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<MainPage />} />
        <Route path={Path.MoviesCategory} element={<MoviesCategoryPage />} />
        <Route path={Path.FilteredMovies} element={<FilteredMoviesPage />} />
        <Route path={Path.Search} element={<SearchPage />} />
        <Route path={Path.Favorites} element={<FavoritesPage />} />
        <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
)