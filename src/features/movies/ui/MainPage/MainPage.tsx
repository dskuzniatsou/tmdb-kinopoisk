
import {WelcomeSection} from "@/features/movies/ui/MainPage/WelcomeSection/WelcomeSection.tsx";
import {MoviesSection} from "@/features/movies/ui/MainPage/MoviesSection/MoviesSection.tsx";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery
} from "@/features/movies/api/moviesApi.ts";

export const MainPage = () => {
    const { data: popularData, isLoading: popularLoading } = useGetPopularMoviesQuery(1);
    const { data: topRatedData, isLoading: topRatedLoading } = useGetTopRatedMoviesQuery(1);
    const { data: upcomingData, isLoading: upcomingLoading } = useGetUpcomingMoviesQuery(1);
    const { data: nowPlayingData, isLoading: nowPlayingLoading } = useGetNowPlayingMoviesQuery(1);
    return (
        <div>
           <WelcomeSection/>
            <MoviesSection/>
        </div>
    )
}