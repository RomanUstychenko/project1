import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, FormInputList, FormInput, FormBtn } from "./ModalItemDetail.styled";
import {
  // useSelector, 
  useDispatch } from 'react-redux';
// import { getFilteredItems } from 'redux/items/items-selector';
import { itemUpdate, 
  // geItemsByCategory
 } from "redux/items/items-operation"; 
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { Formik } from 'formik';
// import { useLocation,
//   //  useSearchParams
//    } from 'react-router-dom';

export default function ModalItemDetail ({
  //  itemsCategory, 
  itemName,
   price, 
   description, 
   _id,
    closeModal}) {
  // const items = useSelector(getFilteredItems);
  // console.log("category", category)
  
 

// const example = [
//   {
//   _id: "12458255", 
//   itemName: "name",
//   description: "descr",
//   price: "255"
// }
// ]


// console.log(example)
// console.log(itemsCategory)
// const newArr = example.map(({_id, ...rest}) => ({rest}))

// // const resss = (exell.map(data => 
// //   delete data._id))
// // const arr = exell.splice(0, 1)
// console.log(newArr)















  //  const location = useLocation();
  // const category = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const [newItemName, setNewItemName] = useState(itemName);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  // const [section, setSection] = useState(category)
// console.log(section)


  const itemNameID = nanoid();
  const itemPriceID = nanoid();
  const itemDescriptionID = nanoid();
 
console.log(itemName, price)

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
        // const duplicateItems = itemsCategory.find(itemCategory => itemCategory.itemName.toLocaleLowerCase() === newItemName.toLocaleLowerCase());
      
       
          // if (duplicateItems) {
          //   Notify.failure(`${itemName} is already in items`)
          //   // alert (`${name} is already in contact`)
          //   return
          // }
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
            // setSection (category)
            if (newPrice === "") 
            {setNewPrice(price)}

            dispatch(itemUpdate(
              {_id, 
                itemName: newItemName,
              description: newDescription,
              price: newPrice,
              // section,
              
              } ));
                // dispatch(geItemsByCategory({category: category}))
                setNewItemName('');
              setNewDescription('');
              setNewPrice('');
              // setSection('');
              closeModal ();
              // setModalDetailActive(false);
          // }
      }; 
      // const initialValues = {
      //   name: '',
      //   description: '',
      //   phone: '',
      // };

      return ( 
        <div>
          <form>
          <FormInputList >
          <label htmlFor={itemNameID}>Name</label>
          <FormInput 
          id={itemNameID} 
          type="text" 
          name="newItemName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={itemName}
          onChange={handleChange} />
        </FormInputList>
          </form>
          <Form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
          
        <FormInputList >
          <label htmlFor={itemNameID}>Name</label>
          <FormInput 
          id={itemNameID} 
          type="text" 
          name="newItemName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={itemName}
          onChange={handleChange} />
        </FormInputList>
        <FormInputList >
          <label htmlFor={itemPriceID}>Price</label>
          <FormInput 
          id={itemPriceID} 
          type="text" 
          name="newPrice" 
          pattern="[0-9]{1,10}"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={price}
          onChange={handleChange} />
        </FormInputList>
        <FormInputList >
          <label htmlFor={itemDescriptionID}>Description</label>
          <FormInput 
          id={itemDescriptionID} 
          type="text" 
          name="newDescription" 
          pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={description}
          onChange={handleChange} />
        </FormInputList>
        <FormBtn 
        // onClick={values => handleSubmit(values)}
        type="submit">Change Name</FormBtn>
        
        </Form>
        </div>
        
        )
};