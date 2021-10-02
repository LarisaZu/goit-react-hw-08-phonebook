import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { register, logIn } from './auth-operations';
import { fetchContacts, addContact, deleteContact } from './auth-operations';

const initialState = {
    user: { name: '', email: '' },
    token: null,
    isLoggedIn: false,
};

export const authReduser = createReducer(initialState, {
    [register.fulfilled]: (state, { payload }) => {
        return {
            payload,
            isLoggedIn: true,
        };
    },
});

export const logInReducer = createReducer(initialState, {
    [logIn.fulfilled]: (state, { payload }) => {
        return {
            payload,
            isLoggedIn: true,
        };
    },
});

// export const authError = createReducer(null, {
//     [register.rejected]: (_, { payload }) => payload,
//     [logIn.rejected]: (_, { payload }) => payload,
//     [register.pending]: () => null,
//     [logIn.pending]: () => null,
// });

export default combineReducers({
    authReduser,
    logInReducer,
    // authError,
});
