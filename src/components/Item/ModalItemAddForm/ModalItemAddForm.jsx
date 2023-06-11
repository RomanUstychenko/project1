import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, FormInputList, FormInputLabel, FormInput } from "components/common/Input.styled";
import {
  // useSelector, 
  useDispatch } from 'react-redux';
// import { getFilteredItems } from 'redux/items/items-selector';

import { addItems } from "redux/items/items-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from "components/Button/Button";


export default function ModalItemAddForm ({
  // onClick,
   setModalActive, category, itemsCategory}) {
  // const items = useSelector(getFilteredItems);
  // console.log("category", category)
  console.log(itemsCategory)
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [section, setSection] = useState(category)
// console.log(section)
  // const [datat, setDatat] = useState({
  //   name: '',
  //   description: '',
  //   phone: '',

  // });

  const itemNameID = nanoid();
  const priceID = nanoid();
  const descriptionID = nanoid();

  const handleChange = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
          case 'itemName':
            setItemName ( e.currentTarget.value);
            break;
            case 'description':
              setDescription (e.currentTarget.value);
            break;
          case 'price':
            setPrice (e.currentTarget.value);
            break;
          default:
            break;
        }
      };

  const handleSubmit = (e) => {

    // const { name, description, phone } = values;

    // const data = new FormData();

    // data.append('name', name);
    // data.append('description', description);
    // data.append('phone', phone);

        e.preventDefault()
        
        const duplicateItems = itemsCategory.find(itemCategory => itemCategory.itemName.toLocaleLowerCase() === itemName.toLocaleLowerCase());
      
       
          if (duplicateItems) {
            Notify.failure(`${itemName} is already in item`)
            return
          }
          if (description === "") {
            setSection (category)
            dispatch(addItems(
              {itemName, price, section}
              ));
              setItemName('');
            // setDescription('');
            setPrice('');
            setSection('');
            setModalActive(false);
          }
          else {
            setSection (category)
            dispatch(addItems(
             {itemName, description, price, section}
              ));
              setItemName('');
              setDescription('');
              setPrice('');
              setSection('');
              setModalActive(false);
          }
      }; 
  
     
      return ( 
        <Form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
          <>
        <FormInputList>
          <FormInputLabel htmlFor={itemNameID}>Name</FormInputLabel>
          <FormInput 
          id={itemNameID} 
          type="text" 
          name="itemName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={itemName} 
          onChange={handleChange} />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={descriptionID}>Description</FormInputLabel>
          <FormInput 
          id={descriptionID} 
          type="text" 
          name="description" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={description} 
          onChange={handleChange} />
        </FormInputList>
        <FormInputList>
          <FormInputLabel htmlFor={priceID}>Price</FormInputLabel>
          <FormInput 
          id={priceID} 
          type="number" 
          name="price" 
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={price} 
          onChange={handleChange} 
          required/>
        </FormInputList>

        <Button 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '100px',
          fontSize: 15,
          color: '#010101'
        }}
    
      text="Add Item"
      type="submit"
      // onClick={() => setModalSectionActive(true)}
      />
        {/* <button 
        // onClick={values => handleSubmit(values)}
        className={scss.formBtn}
        type="submit">Add</button> */}
        </>
        </Form>
        )
};