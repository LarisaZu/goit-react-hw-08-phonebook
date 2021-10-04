import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const message = 'Something went wrong. Please, try again';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(message);
        }
    },
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            // console.table(error);
            return rejectWithValue(message);
        }
    },
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return rejectWithValue(message);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        // console.log(state);
        const persistedToken = state.auth.token;
        // console.log(persistedToken);

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            // console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(message);
        }
    },
);
