import { useDispatch, useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    console.log(isLoggedIn);
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            {/* {isLoggedIn ? <p>да</p>: <p>no</p>}  */}
            {/* <UserMenu />
            <AuthNav /> */}
        </header>
    );
};

export default AppBar;
