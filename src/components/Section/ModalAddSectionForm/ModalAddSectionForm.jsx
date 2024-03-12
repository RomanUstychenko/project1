import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, FormInputList, FormInputLabel, FormInput } from "components/common/GeneralStyle/Input.styled";
import { useSelector, useDispatch } from 'react-redux';
import { getSections } from 'redux/sections/sections-selector';
import { addSection } from "redux/sections/sections-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from "components/Button/Button";

export default function ModalAddSectionForm ({onClick, setModalSectionActive}) {
  // console.log(setModalSectionActive)
  const sections = useSelector(getSections);
  // console.log(sections)
  
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  


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

          e.preventDefault()
        const duplicateSections = sections.find(section => section.category.toLocaleLowerCase() === category.toLocaleLowerCase());
      
          if (duplicateSections) {
            Notify.failure(`${category} is already in item`)
            return
          }
              dispatch(addSection({category}));
              setCategory('');
              setModalSectionActive(false);
      }; 

      return ( 
        <Form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
          <>
        <FormInputList>
          <FormInputLabel htmlFor={sectionNameID}>Name</FormInputLabel>
          <FormInput 
          id={sectionNameID} 
          type="text" 
          name="category" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={category} 
          onChange={handleChange} />
        </FormInputList>
       
        <Button 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '80px',
          fontSize: 15,
          color: '#010101',
        }}
    
      text="Add"
      type="submit"
      />
        </>
        </Form>
        )
};