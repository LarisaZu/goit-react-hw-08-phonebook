import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={s.auth_nav}>
            <NavLink
                to="/register"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Sign Up
            </NavLink>
            <NavLink
                to="/login"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Login
            </NavLink>
        </div>
    );
};

export default AuthNav;
