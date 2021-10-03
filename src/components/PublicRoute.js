import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({
    children,
    redirectTo = '/',
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = restricted && isLoggedIn;
    return (
        <Route {...routeProps}>
            {shouldRedirect ?<Redirect to={redirectTo}></Redirect>  : children}
        </Route>
    );
}

<Redirect to="/"></Redirect>;
