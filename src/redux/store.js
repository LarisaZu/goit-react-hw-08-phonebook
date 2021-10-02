import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import phonebookReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';

const store = configureStore({
    reducer: {
        contacts: phonebookReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
