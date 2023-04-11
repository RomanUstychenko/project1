// import { useEffect } from "react";
import  ContactForm  from "../../components/ContactForm/ContactForm"
import {ContactList} from "../../components/ContactList/ContactList"
import { fetchContacts } from "redux/contacts/contacts-operation"
import Filter from "../../components/filter/Filter"
import scss from "./Contacts.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getState } from 'redux/contacts/contacts-selector';
import { getContacts } from 'redux/contacts/contacts-selector';
// import UseAuth from "components/hooks/useAuth"
// import { Navigate } from "react-router-dom"

export default function Contacts() {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
 const {loading, error} = useSelector(getState);
      useEffect(() => {
          dispatch(fetchContacts());
          }, [dispatch]);
  return (
    <div  className={scss.phoneBook}>
      <div className={scss.contactForm}>
      <h2 className={scss.titlePhoneBook}>PhoneBook</h2>
        <ContactForm />
      </div>
      <div className={scss.contacts}>
      <h2>Contacts</h2>
        <Filter />
          {!loading && contacts.length > 0 && <ContactList />}
          {loading && <p className={scss.contactsLoading}>...loading</p>}
          {error && <p>oops, something went wrong</p>}
      </div>
    </div>
    )
};