
import {WelcomeSection} from "@/features/movies/ui/MainPage/WelcomeSection/WelcomeSection.tsx";

import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery
} from "@/features/movies/api/moviesApi.ts";
import {MovieSection} from "@/features/movies/ui/MainPage/MoviesSection/MoviesSection.tsx";

export const MainPage = () => {
    const { data: popularData, isLoading: popularLoading, error: popularError  } = useGetPopularMoviesQuery(1);
    const { data: topRatedData, isLoading: topRatedLoading, error: topRatedError } = useGetTopRatedMoviesQuery(1);
    const { data: upcomingData, isLoading: upcomingLoading, error:upcomingError  } = useGetUpcomingMoviesQuery(1);
    const { data: nowPlayingData, isLoading: nowPlayingLoading, error: nowPlayingError } = useGetNowPlayingMoviesQuery(1);

    return (
        <div>
           <WelcomeSection/>
            <MovieSection
                title="Popular Movies"
                movies={popularData?.results || []}
                loading={popularLoading}
                viewMorePath="/movies/popular"
                error={popularError ? 'Ошибка загрузки популярных фильмов' : null}
            />
            <MovieSection
                title="Top Rated Movies"
                movies={topRatedData?.results || []}
                loading={topRatedLoading}
                viewMorePath="movie/top_rated"
                error={topRatedError ? 'Ошибка загрузки топ-рейтинг фильмов' : null}
            />
            <MovieSection
                title="Upcoming Movies"
                movies={upcomingData?.results || []}
                loading={upcomingLoading}
                viewMorePath="movie/upcoming"
                error={upcomingError ? 'Ошибка загрузки предстоящих фильмов' : null}
            />
            <MovieSection
                title="Now Playing Movies"
                movies={nowPlayingData?.results || []}
                loading={nowPlayingLoading}
                viewMorePath="movie/upcoming"
                error={nowPlayingError ? 'Ошибка загрузки идущих фильмов' : null}
            />
        </div>
    )
}