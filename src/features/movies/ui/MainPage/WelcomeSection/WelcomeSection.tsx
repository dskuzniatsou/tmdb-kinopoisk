import {SearchBar} from "@/common/components";
import s from '../MainPage.module.css'
import {useGetRandomPopularMovieQuery} from "@/features/movies/api/moviesApi.ts";
import {IMAGE_BASE_URL, IMAGE_NOTFOUND, IMAGE_SIZES} from "@/common/constants/images.ts";


export const WelcomeSection = () => {
    // const imageUrl = "https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
    const { data: randomMovie, isLoading, error } = useGetRandomPopularMovieQuery();
    if (isLoading) {
        return (
            <div className={s.welcomeSection}>
                <div className={s.loading}>Загрузка...</div>
            </div>
        );
    }

    // if (error || !randomMovie) {
    //     return (
    //         <div className={s.welcomeSection}>
    //             <div className={s.content}>
    //                 <h1 className={s.title}>Добро пожаловать в Кинотеку</h1>
    //                 <p className={s.subtitle}>
    //                     Миллионы фильмов, сериалов и шоу. Откройте для себя что-то новое сегодня!
    //                 </p>
    //                 <SearchBar />
    //             </div>
    //         </div>
    //     );
    // }
    console.log(randomMovie)
    const backdropUrl = randomMovie?.backdrop_path
        ? `${IMAGE_BASE_URL}/${IMAGE_SIZES.backdrop}${randomMovie.backdrop_path}`
        : `${IMAGE_BASE_URL}/${IMAGE_SIZES.backdrop}${IMAGE_NOTFOUND}`;
console.log(error)
    return (
        <div className={s.container} style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <h1>Welcome</h1>
            <h2>Browse highlighted titles from TMDB</h2>
            <SearchBar/>
        </div>
    );
};

