// pages/MainPage/components/SearchBar.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './SearchBar.module.css';

export const SearchBar=()=> {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            handleSearch();
        }
    };

    const isValid = searchQuery.trim().length > 0;

    return (
        <div className={s.searchContainer}>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for a movie..."
                className={s.searchInput}
            />
            <button
                onClick={handleSearch}
                disabled={!isValid}
                className={`${s.searchButton} ${!isValid ? s.disabled : ''}`}
            >
                Search
            </button>
        </div>
    );
}