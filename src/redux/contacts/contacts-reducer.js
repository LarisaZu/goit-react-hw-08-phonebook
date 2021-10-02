import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchContacts, addContact, deleteContact } from './contacts-operations';
import { changeFilter } from './contacts-actions';

const entities = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, {meta}) =>
        state.filter(contact => contact.id !== meta.arg),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [fetchContacts.pending]: () => null,
});

export default combineReducers({
    entities,
    filter,
    isLoading,
    error,
});
