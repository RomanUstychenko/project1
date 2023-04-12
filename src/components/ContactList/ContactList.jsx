import scss from "./ContactList.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import  { getFilter }from 'redux/filter/filter-selector';
import { deleteContact } from "redux/contacts/contacts-operation"; 

 export const ContactList = () => {
    
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const getFilteredContact = () => {
        if (!filter) {
          return contacts;
        }
            const normalizedFilter = filter.toLocaleLowerCase();
            const filteredContact = contacts.filter(({name}) => {
            const nornalizedName = name.toLocaleLowerCase();
            const result = nornalizedName.includes(normalizedFilter);
            return result;
          })
          return filteredContact;
        };

    return (
            <ul>
            {getFilteredContact().map(({name, phone, id}) => (
            <li className={scss.contactList} key={id}> 
            <b>Name:</b>  {name} <br />
            <b className={scss.tel}>Tel:</b> {phone} 
            <span className={scss.delContacts} onClick={() => { dispatch(deleteContact(id)); }}>Delete</span></li>
    ))
    }
         </ul>)
         }