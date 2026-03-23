import {NavLink} from 'react-router'
import s from './Header.module.css'
import {Path} from "@/common/constants";




const navItems = [
    { to: Path.Main, label: 'Main' },
    { to: Path.MoviesCategory, label: 'Movies' },
    { to: Path.FilteredMovies, label: 'Filtered Movies' },
    { to: Path.Search, label: 'Search' },
    { to: Path.Favorites, label: 'Favorites' },
]

export const Header = () => {

    return (
        <header className={s.container}>
            <a aria-label="Go to TMDB home" href="/" data-discover="true"
               aria-current="page">
                <img src='src/assets/logo_header.svg' className="logo" alt='logo' width="150" height="50"/>
            </a>
            <nav>
                <ul className={s.list}>
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({isActive}) => `link ${isActive ? s.activeLink : ''}`}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button type="button"
                    aria-label="Переключить на тёмную тему" title="Переключить на тёмную тему">🌙
            </button>

        </header>
    )
}