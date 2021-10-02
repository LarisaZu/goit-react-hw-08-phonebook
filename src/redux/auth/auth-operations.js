import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },

}

export const register = createAsyncThunk('auth/register', (credentials) => {
    const user = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
    };
    const newUser = axios.post('/users/signup', user).then(({ data }) => data);
    console.log(newUser);
    return newUser;
});

export const logIn = createAsyncThunk('auth/login', (credentials) => {
    const user = {
        email: credentials.email,
        password: credentials.password,
    };
    const dataUser = axios.post('/users/login', user).then(({ data }) => data);
    console.log(dataUser);
    return dataUser;
});

export const logOut = createAsyncThunk('auth/logout', () => {
  return axios.post('/users/logout');
})








// export const fetchContacts = createAsyncThunk('contacts/fetchContacts', () => {
//     const contacts = axios.get('/contacts').then(response => response.data);
//     //  console.log(contacts);
//     return contacts;
// });, 