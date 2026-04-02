// hooks/useMoviesByCategory.ts


import {type CategoryId, MOVIE_CATEGORIES} from "@/common/constants/categories.ts";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi.ts";

export const useMoviesByCategory = (categoryId: CategoryId, page: number) => {
    const category = MOVIE_CATEGORIES[categoryId];

    const { data, isLoading, error, isFetching } = useGetMoviesByCategoryQuery({
        category: category.apiEndpoint,
        page,
    });
    console.log('API response:', data);
    return {
        movies: data?.results || [],
        totalPages: data?.total_pages || 0,
        totalResults: data?.total_results || 0,
        isLoading,
        isFetching,
        error,
        category,
    };
};