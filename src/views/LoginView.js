import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logIn} from 'redux/auth/auth-operations';

const LoginView = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleSubmit = event => {
        event.preventDefault();
        setUser({ email, password });
        dispatch(logIn(user));
        // console.log(user);
        setUser({ email: '', password: '' });
    };

    return (
        <div>
            <h1>Login page</h1>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Email address
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Enter</button>
            </form>
        </div>
    );
};
export default LoginView;
