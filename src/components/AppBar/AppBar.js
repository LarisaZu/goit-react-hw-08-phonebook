import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import s from './AppBar.module.css';

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    // console.log(isLoggedIn);
    return (
        <aside className={s.navigation}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </aside>
    );
};

export default AppBar;
