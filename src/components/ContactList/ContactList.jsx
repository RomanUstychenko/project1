import scss from "./ContactList.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/contacts-selector';
import  { getFilter }from 'redux/filter/filter-selector';
import { deleteContact } from "redux/contacts/contacts-operation"; 

import { Modal } from "components/Modal/Modal";

 export const ContactList = () => {
    
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const [modalActive, setModalActive] = useState(false);

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

        function closeModal () {
          setModalActive(false)
          document.body.style.overflow = '';
        }


    return (
      <>
            <ul>
            {getFilteredContact().map(({name, phone, _id}) => (
            <li className={scss.contactList} key={_id}> 
            <b>Name:</b>  {name} <br />
            <b className={scss.tel}>Tel:</b> {phone} 
            <span className={scss.delContacts} 
            onClick={() => setModalActive(true)}>Delete</span></li>
    ))
    }
   
         </ul>
         { modalActive && (
      getFilteredContact().map(({ _id}) => (
          <Modal
          // 
          onClick={() => closeModal ()}
          active={modalActive}
          setActive={setModalActive}>

      <div
      onClick={e => e.stopPropagation()}
      active={modalActive}>
        Do you really wont to delete?
          <button
          onClick={() => 
            
            { dispatch(deleteContact(_id))}} 
          >
            yes
          </button>
        `
      </div>
          </Modal>
         )))}
         </>
    )

         }