// hooks/usePagination.ts
import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = (initialPage: number = 1) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(() => {
        const page = searchParams.get('page');
        return page ? parseInt(page, 10) : initialPage;
    });

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
        setSearchParams({ page: page.toString() });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [setSearchParams]);

    return {
        currentPage,
        handlePageChange,
    };
};