import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <p>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</p>
            </div>
        </footer>
    );
};

