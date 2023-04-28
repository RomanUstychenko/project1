import { useState } from "react";
import { nanoid } from "nanoid";
import scss from "./ModalItemDetail.module.scss"
import {
  // useSelector, 
  useDispatch } from 'react-redux';
// import { getFilteredItems } from 'redux/items/items-selector';
import { itemUpdate, geItemsByCategory } from "redux/items/items-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Formik } from 'formik';
import { useLocation,
  //  useSearchParams
   } from 'react-router-dom';

export default function ModalItemDetail ({onClick, setModalDetailActive, itemsCategory, itemName, price, description, _id, onSubmit, onChange}) {
  // const items = useSelector(getFilteredItems);
  // console.log("category", category)
  


const ex = {_id: "255", 
  itemName: "name",
description: "descr",
price: "255",}

const res = ex.find(data => data.itemName)
console.log(res)















   const location = useLocation();
  const category = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const [newItemName, setNewItemName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDescription, setNewDescription] = useState('');
  // const [section, setSection] = useState(category)
// console.log(section)


  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemDescriptionID = nanoid();
 
console.log(itemName)

  const handleChange = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
          case 'newItemName':
            setNewItemName ( e.currentTarget.value);
            break;
            case 'newPrice':
              setNewPrice ( e.currentTarget.value);
            break;
            case 'newDescription':
              setNewDescription ( e.currentTarget.value);
            break;
          default:
            break;
        }
      };

  const handleSubmit = (e) => {

        e.preventDefault()
        const duplicateItems = itemsCategory.find(itemCategory => itemCategory.itemName.toLocaleLowerCase() === newItemName.toLocaleLowerCase());
      
       
          if (duplicateItems) {
            Notify.failure(`${itemName} is already in item`)
            // alert (`${name} is already in contact`)
            return
          }
          // if (description === "") {
          //   setSection (category)
          //   dispatch(addItems(
          //     {itemsName, price, section}
          //     ));
          //     setItemsName('');
          //   // setDescription('');
          //   setPrice('');
          //   setSection('');
          //   setModalActive(false);
          // }
          // else {
            // setSection (category)

            // console.log(_id)
            // console.log(itemsName)
            // console.log(dispatch(itemUpdate({_id, 
            //   itemName: itemsName}
            //  )))
            dispatch(itemUpdate(
              {_id, 
                itemName: newItemName,
              description: newDescription,
              price: newPrice,
              
              } ));
                // dispatch(geItemsByCategory({category: category}))
                setNewItemName('');
              setNewDescription('');
              setNewPrice('');
              // setSection('');
              setModalDetailActive(false);
          // }
      }; 
      // const initialValues = {
      //   name: '',
      //   description: '',
      //   phone: '',
      // };

      return ( 
        <form 
        onClick={e => e.stopPropagation()}
        className={scss.form}
        onSubmit={handleSubmit}
        >
          <>
        <div className={scss.formInput}>
          <label htmlFor={itemNameID}>Name</label>
          <input 
          className={scss.formInputName}
          id={itemNameID} 
          type="text" 
          name="newItemName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={itemName}
          onChange={handleChange} />
        </div>
        <div className={scss.formInput}>
          <label htmlFor={itemPriceID}>Price</label>
          <input 
          className={scss.formInputName}
          id={itemPriceID} 
          type="text" 
          name="newPrice" 
          pattern="[0-9]{1,10}"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={price}
          onChange={handleChange} />
        </div>
        <div className={scss.formInput}>
          <label htmlFor={itemDescriptionID}>Description</label>
          <input 
          className={scss.formInputName}
          id={itemDescriptionID} 
          type="text" 
          name="newDescription" 
          pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={description}
          onChange={handleChange} />
        </div>
        <button 
        // onClick={values => handleSubmit(values)}
        className={scss.formBtn}
        type="submit">Change Name</button>
        </>
        </form>
        )
};