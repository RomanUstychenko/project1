import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, FormInputList, FormInputLabel, FormInput } from "components/common/GeneralStyle/Input.styled";
import { useSelector, useDispatch } from 'react-redux';
import { getSections } from 'redux/sections/sections-selector';
import { addSection } from "redux/sections/sections-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from "components/Button/Button";

export default function ModalAddSectionForm ({setModalSectionActive}) {
  // console.log(setModalSectionActive)
  const sections = useSelector(getSections);
  console.log(sections)
  
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

      // Функція для отримання максимального значення idSort в масиві
const getMaxIdSort = (sections) => {
  return sections.reduce((max, section) => {
      return Math.max(max, parseInt(section.idSort));
  }, 0);
};

  const handleSubmit = (e) => {

    const maxIdSort = getMaxIdSort(sections);
    // console.log((maxIdSort + 1).toString(),)
          e.preventDefault()
        const duplicateSections = sections.find(section => section.category.toLocaleLowerCase() === category.toLocaleLowerCase());
      
          if (duplicateSections) {
            Notify.failure(`${category} is already in item`)
            return
          }
              dispatch(addSection({
                idSort: (maxIdSort + 1).toString(),
                category}));
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
          pattern="^[^0-9].*"
          title="A section cannot start with a number"
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