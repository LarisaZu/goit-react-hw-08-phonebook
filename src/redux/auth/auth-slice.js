import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    error: null,
    isGettingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: state => {
            return {
                ...state,
                error: null,
            };
        },
        [register.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isLoggedIn: true,
            };
        },
        [register.rejected]: (_, { payload }) => {
            toast.error(payload);
        },

        [logIn.pending]: state => {
            return {
                ...state,
                error: null,
            };
        },
        [logIn.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isLoggedIn: true,
            };
        },
        [logIn.rejected]: (state, { payload }) => {
            toast.error(payload);
            return {
                ...state,
                error: 'что-то',
            };
        },

        [logOut.pending]: state => {
            return {
                ...state,
                error: null,
            };
        },
        [logOut.fulfilled]: state => {
            return {
                ...initialState,
            };
        },
        [logOut.rejected]: (_, { payload }) => {
            toast.error(payload);
        },

        [getCurrentUser.pending]: state => {
            return {
                ...state,
                isGettingCurrentUser: true,
            };
        },
        [getCurrentUser.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                user: payload,
                isLoggedIn: true,
                isGettingCurrentUser: false,
            };
        },
        [getCurrentUser.rejected]: state => {
            return {
                ...state,
                isGettingCurrentUser: false,
            };
        },
    },
});

export default authSlice.reducer;
