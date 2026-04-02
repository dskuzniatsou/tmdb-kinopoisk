// pages/MoviesCategoryPage/components/CategoryTabs.tsx

import styles from './CategoryTabs.module.css';
import {type CategoryId, MOVIE_CATEGORIES} from "@/common/constants/categories.ts";

interface CategoryTabsProps {
    activeCategory: CategoryId;
    onCategoryChange: (category: CategoryId) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
    const categories = Object.entries(MOVIE_CATEGORIES);

    return (
        <div className={styles.tabsContainer}>
            {categories.map(([id, category]) => (
                <button
                    key={id}
                    className={`${styles.tab} ${activeCategory === id ? styles.active : ''}`}
                    onClick={() => onCategoryChange(id as CategoryId)}
                    aria-label={`Показать ${category.label}`}
                >
                    <span className={styles.tabLabel}>{category.label}</span>
                    {activeCategory === id && (
                        <span className={styles.activeIndicator} />
                    )}
                </button>
            ))}
        </div>
    );
}
