import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

// export const fetchContacts = () => {
//     const { data } = axios.get('/contacts');
//     return data;
// }
const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
};

const addContact = contact => {
    return axios.post('/contacts', contact).then(({ data }) => data);
};
const deleteContact = contactId => {
    return axios.delete(`/contacts/${contactId}`);
};
const updateContact = (contactId, update) => {
    return axios
        .patch(`/contacts/${contactId}`, update)
        .then(({ data }) => data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact, updateContact };
