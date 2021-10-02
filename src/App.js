import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

function App() {
    return (
        <Container>
            <AppBar />

            <Switch>
                <Route exact path="/">
                    <HomeView />
                </Route>
                <Route path="/register">
                    <RegisterView />
                </Route>
                <Route path="/login">
                    <LoginView />
                </Route>
                <Route path="/contacts">
                    <ContactsView />
                </Route>
            </Switch>
            <ToastContainer />
        </Container>
    );
}

export default App;
