import {SearchBar} from "@/common/components";
import styles from './SearchPage.module.css'

export const SearchPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1> Search Results</h1>
                <SearchBar/>
                <p>Enter a movie title to start searching.</p>
            </div>
        </div>

    );
};

