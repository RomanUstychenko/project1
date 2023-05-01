import { useState } from "react";
import { nanoid } from "nanoid";
import scss from "./ModalChangeSectionName.module.scss"
import {
  useSelector, 
  useDispatch } from 'react-redux';
import { getSections } from 'redux/sections/sections-selector';
import { updateSection } from "redux/sections/sections-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Formik } from 'formik';
import { useLocation,
  //  useSearchParams
   } from 'react-router-dom';
   import { useEffect } from "react";
   import {  geItemsByCategory } from "redux/items/items-operation";
   import { fetchSections } from "redux/sections/sections-operation"

export default function ModalChangeSectionName ({
   itemsCategory, 
   category,
   price, 
   description, 
   _id,
    closeModal}) {
  const sections = useSelector(getSections);
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















   const location = useLocation();
//   const category = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const [newSectionName, setNewSectionName] = useState(category);

  // const [section, setSection] = useState(category)
// console.log(section)


  const sectionNameID = nanoid();
 
 
// console.log(itemName, price)

  const handleChange = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
          case 'newSectionName':
            setNewSectionName ( e.currentTarget.value);
            break;
          default:
            break;
        }
      };

  const handleSubmit = (e) => {

        e.preventDefault()
        const duplicateItems = sections.find(section => section.category.toLocaleLowerCase() === newSectionName.toLocaleLowerCase());
      
       
          if (duplicateItems) {
            Notify.failure(`${newSectionName} is already in item`)
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
            // setSection (category)

            dispatch(updateSection(
              {_id, 
                category: newSectionName,              
              } ));
                // dispatch(geItemsByCategory({category: category}))
                setNewSectionName('');
            
              closeModal ();
              // setModalDetailActive(false);
          // }
      }; 
      // const initialValues = {
      //   name: '',
      //   description: '',
      //   phone: '',
      // };


      useEffect(() => {
        // dispatch(fetchItems());
        console.log("use in modal")
        dispatch(fetchSections());
      
        
          // if (category === undefined) {
          //   console.log("undef")
          // }
          // else {
           
          //   dispatch(geItemsByCategory({category: category}))
          // }
        
        }, 
         [ dispatch,
            newSectionName,
           category,
           ])




      return ( 
        <form 
        onClick={e => e.stopPropagation()}
        className={scss.form}
        onSubmit={handleSubmit}
        >
          <>
        <div className={scss.formInput}>
          <label htmlFor={sectionNameID}>Name</label>
          <input 
          className={scss.formInputName}
          id={sectionNameID} 
          type="text" 
          name="newSectionName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          // value={itemsName} 
          defaultValue={category}
          onChange={handleChange} />
        </div>
        
        <button 
        // onClick={values => handleSubmit(values)}
        className={scss.formBtn}
        type="submit">Change Section</button>
        </>
        </form>
        )
};