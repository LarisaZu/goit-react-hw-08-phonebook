import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', () => {
    const contacts = axios.get('/contacts').then(response => response.data);
    //  console.log(contacts);
    return contacts;
});

export const addContact = createAsyncThunk(
    'contacts/addContact',
    contactData => {
        const contact = {
            name: contactData.name,
            number: contactData.number,
            password: contactData.password,
        };
        const newContact = axios
            .post('/contacts', contact)
            .then(({ data }) => data);
        console.log(newContact);
        return newContact;
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    contactId => {
        console.log(contactId);
        return axios.delete(`/contacts/${contactId}`).then(({ data }) => data);
    },
);
