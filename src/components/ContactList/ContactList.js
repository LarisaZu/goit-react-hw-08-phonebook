import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import {
    deleteContact,
    fetchContacts,
} from 'redux/contacts/contacts-operations';
import s from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            {contacts.length > 0 && (
                <ul className={s.list}>
                    {contacts.map(({ id, name, number }) => (
                        <li key={id} className={s.item}>
                            <p>
                                {name}: {number}
                            </p>
                            <button
                                type="button"
                                onClick={() => dispatch(deleteContact(id))}
                                className={s.btn_delete}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ContactList;
