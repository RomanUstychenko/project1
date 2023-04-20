// import scss from "./ContactList.module.scss"
import { useSelector, 
  // useDispatch
 } from 'react-redux';
// import { useState } from 'react';
import { getItems } from 'redux/items/items-selector';
import  { getFilter }from 'redux/filter/filter-selector';
// import { deleteContact } from "redux/contacts/contacts-operation"; 
import ItemInList from "components/ItemInList/ItemInList";



 export const ItemList = () => {


    
    const items = useSelector(getItems);


    const filter = useSelector(getFilter);
    // const dispatch = useDispatch();



    const getFilteredItem = () => {
        if (!filter) {
          return items;
        }
            const normalizedFilter = filter.toLocaleLowerCase();
            const filteredItem = items.filter(({itemName}) => {
            const nornalizedName = itemName.toLocaleLowerCase();
            const result = nornalizedName.includes(normalizedFilter);
            return result;
          })
          return filteredItem;
        };




    return (
      <>
            <ul>
            {getFilteredItem().map(filteredItem => (
              <ItemInList
              key={filteredItem._id}
              filteredItem={filteredItem}/>
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