// import scss from "./ContactList.module.scss"
import { useSelector, 
  // useDispatch
 } from 'react-redux';
// import { useState } from 'react';
import { getContacts } from 'redux/contacts/contacts-selector';
import  { getFilter }from 'redux/filter/filter-selector';
// import { deleteContact } from "redux/contacts/contacts-operation"; 
import ContactsItem from "components/ContactItem/ContactsItem";



 export const ContactList = () => {


    
    const contacts = useSelector(getContacts);


    const filter = useSelector(getFilter);
    // const dispatch = useDispatch();



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
      <>
            <ul>
            {getFilteredContact().map(filteredContact => (
              <ContactsItem
              key={filteredContact._id}
              filteredContact={filteredContact}/>
            // <li className={scss.contactList} key={_id}> 
            // <b>Name:</b>  {name} <br />
            // <b className={scss.tel}>Tel:</b> {phone} 
            // <span className={scss.delContacts} 
            // onClick={() => setModalActive(true)}>Delete</span>
            
            // </li>
            
     ))} 

         </ul>
         
         </>
    )

         }