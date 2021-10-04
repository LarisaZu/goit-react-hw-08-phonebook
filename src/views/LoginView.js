import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logIn} from 'redux/auth/auth-operations';
import s from './view.module.css'
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
        <div className={s.cover_wrapper}>
            <h1>Login page</h1>

            <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
                <label className={s.label}>
                    Email address
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={s.input}
                    />
                </label>

                <label className={s.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={s.input}
                        
                    />
                </label>

                <button type="submit" className={s.button}>Enter</button>
            </form>
        </div>
    );
};
export default LoginView;
