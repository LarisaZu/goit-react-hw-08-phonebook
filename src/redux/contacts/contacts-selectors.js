import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.entities;

// export const getVisibleContacts = state => {
//     const contacts = getContacts(state);
//     const filter = getFilter(state);
//     const normalizedValue = value => value.toLowerCase();

//     return contacts.filter(contact =>
//         normalizedValue(contact.name).includes(normalizedValue(filter)),
//     );
// };

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizedValue = value => value.toLowerCase();
        return contacts.filter(contact =>
            normalizedValue(contact.name).includes(normalizedValue(filter)),
        );
    },
);
