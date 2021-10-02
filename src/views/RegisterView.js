import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {register} from 'redux/auth/auth-operations';

const RegisterView = () => {
    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
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
        <div>
            <h1>Register page</h1>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>

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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default RegisterView;
