import { useState } from "react";
import { nanoid } from "nanoid";
import scss from "./ModalSectionForm.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getSections } from 'redux/sections/sections-selector';
import { addSection } from "redux/sections/sections-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Formik } from 'formik';

export default function ModalSectionForm ({onClick, setModalSectionActive}) {
  // console.log(setModalSectionActive)
  const sections = useSelector(getSections);
  // console.log(sections)
  
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  

  // const [datat, setDatat] = useState({
  //   name: '',
  //   description: '',
  //   phone: '',

  // });

  const sectionNameID = nanoid();
;

  const handleChange = (e) => {
        const { name } = e.currentTarget;
        switch (name) {
          case 'category':
            setCategory ( e.currentTarget.value);
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
        const duplicateSections = sections.find(section => section.category.toLocaleLowerCase() === category.toLocaleLowerCase());
      
       
          if (duplicateSections) {
            Notify.failure(`${category} is already in item`)
            // alert (`${name} is already in contact`)
            return
          }
              dispatch(addSection({category}));
              setCategory('');
              setModalSectionActive(false);
          
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
        // initialValues={initialValues}
        // validateOnChange
        >
          <>
        <div className={scss.formInput}>
          <label htmlFor={sectionNameID}>Name</label>
          <input 
          className={scss.formInputName}
          id={sectionNameID} 
          type="text" 
          name="category" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={category} 
          onChange={handleChange} />
        </div>
       
        <button 
        // onClick={values => handleSubmit(values)}
        className={scss.formBtn}
        type="submit">Add</button>
        </>
        </form>
        )
};