import { NavLink } from 'react-router-dom';

const AuthNav = () => {
    return (
        <div>
            <NavLink to="/register">
                {/* style={styles.link} */}
                {/* activeStyle={styles.activeLink} */}
                Sign Up
            </NavLink>
            <NavLink to="/login">
                {/* style={styles.link} */}
                {/* activeStyle={styles.activeLink} */}
                Login
            </NavLink>
        </div>
    );
};

export default AuthNav;
