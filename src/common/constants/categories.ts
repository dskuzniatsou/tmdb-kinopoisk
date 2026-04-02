// constants/categories.ts
export const MOVIE_CATEGORIES = {
    popular: {
        id: 'popular',
        title: 'Popular',
        label: 'Популярные',
        apiEndpoint: 'popular',
    },
    top_rated: {
        id: 'top_rated',
        title: 'Top Rated',
        label: 'Топ рейтинг',
        apiEndpoint: 'top_rated',
    },
    upcoming: {
        id: 'upcoming',
        title: 'Upcoming',
        label: 'Скоро',
        apiEndpoint: 'upcoming',
    },
    now_playing: {
        id: 'now_playing',
        title: 'Now Playing',
        label: 'В прокате',
        apiEndpoint: 'now_playing',
    },
} as const;

export type CategoryId = keyof typeof MOVIE_CATEGORIES;
export type CategoryType = typeof MOVIE_CATEGORIES[CategoryId];