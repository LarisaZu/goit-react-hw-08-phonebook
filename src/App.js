import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Container from './components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import {getIsGettingCurrentUser} from './redux/auth/auth-selectors'
import {getCurrentUser} from './redux/auth/auth-operations';

// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-view" */));
const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-view" */));

function App() {
    const dispatch = useDispatch();
    const isGettingCurrentUser = useSelector(getIsGettingCurrentUser);
    // console.log('isGettingCurrentUser', isGettingCurrentUser);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);
    return ( !isGettingCurrentUser &&
        (<Container>
            <AppBar />

        <Suspense fallback={<h1>LOADING...</h1>}>
            <Switch>
                <PublicRoute exact path="/">
                    <HomeView />
                </PublicRoute>
                <PublicRoute path="/register" restricted>
                    <RegisterView />
                </PublicRoute>
                <PublicRoute path="/login" redirectTo="/contacts" restricted>
                    <LoginView />
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                    <ContactsView />
                </PrivateRoute>
            </Switch>
            </Suspense>
            <ToastContainer />
        </Container>)
);
}

export default App;
