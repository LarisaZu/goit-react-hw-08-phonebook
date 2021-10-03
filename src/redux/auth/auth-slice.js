import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register, logIn, logOut } from './auth-operations';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
    error: null,
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
                user: payload,
                token: payload.token,
                isLoggedIn: true,
            };
        },
        [register.rejected]: (_, action) => {
            toast.error(action.payload);
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
                // error: "что-то",
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
                ...state,
                user: { name: '', email: '' },
                token: null,
                isLoggedIn: false,
            };
        },
        [logOut.rejected]: (_, action) => {
            toast.error(action.payload);
        },
    },
});

export default authSlice.reducer;
