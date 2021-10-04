import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import s from './view.module.css';

const RegisterView = () => {
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = newUser;

    const handleChange = event => {
        const { name, value } = event.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
        // console.log(user.name);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setNewUser({ name, email, password });
        dispatch(register(newUser));
        setNewUser({ name: '', email: '', password: '' });
        // console.log(newUser);
    };

    return (
        <div className={s.cover_wrapper}>
            <h1>Register page</h1>

            <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
                <label className={s.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className={s.input}
                    />
                </label>

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

                <button type="submit" className={s.button}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default RegisterView;
