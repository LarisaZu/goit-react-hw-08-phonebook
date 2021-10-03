import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import {getIsLoggedIn} from '../../redux/auth/auth-selectors'

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <nav>
            <NavLink
                to="/"
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Home
            </NavLink>
            {isLoggedIn && <NavLink
                to="/contacts"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Contacts
            </NavLink>}
        </nav>
    );
};

export default Navigation;