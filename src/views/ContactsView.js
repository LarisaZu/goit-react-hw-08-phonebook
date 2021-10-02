import ContactList from 'components/ContactList/ContactList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import s from 'App.module.css'

const ContactsView = () => {
    return (
        <div className={s.wrapper}>
                <div className={s.phonebook}>
                    <h1>Phonebook</h1>
                    <Form />
                </div>
                <div className={s.contacts}>
                    <h2>Contacts</h2>
                    <Filter />

                    <ContactList />
                    
                </div>
            </div>
    )
}
export default ContactsView;