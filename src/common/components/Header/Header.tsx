import {Link, NavLink} from 'react-router'
import s from './Header.module.css'
import {Path} from "../../routing";






const navItems = [
    { to: Path.Main, label: 'Main' },
    { to: Path.Movies, label: 'Movies' },
    { to: Path.Filtered_Movies, label: 'Filtered Movies' },
    { to: Path.Search, label: 'Search' },
    { to: Path.Favorites, label: 'Favorites' },
]

export const Header = () => {
    <Link to='/' className="button">
        Лого
    </Link>
    return (
        <header className={s.container}>

            <nav>
                <ul className={s.list}>
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => `link ${isActive ? s.activeLink : ''}`}
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