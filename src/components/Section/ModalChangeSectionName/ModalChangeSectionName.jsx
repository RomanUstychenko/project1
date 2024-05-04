import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, FormInputList, FormInput, FormInputLabel, LabelName } from "components/common/GeneralStyle/Input.styled";
import {
  useSelector, 
  useDispatch } from 'react-redux';
import { getSections } from 'redux/sections/sections-selector';
import { updateSection } from "redux/sections/sections-operation"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BtnList } from "./ModalChangeSectionName.styled";
import { Modal } from "components/common/Modal/Modal";
import ModalSectionDelete from "../ModalSectionDelete/ModalSectionDelete";
  import { Button } from "components/Button/Button";

export default function ModalChangeSectionName ({ 
   category, 
   _id,
   idSort,
   closeModal
  }) {
  const sections = useSelector(getSections);
  
  const dispatch = useDispatch();
console.log("idSort", idSort)
  const [newSectionName, setNewSectionName] = useState(category);
  // const [newIdSort, setNewIdSort] = useState(idSort);

  const [modalDeleteActive, setModalDeleteActive] = useState(false);

  const sectionNameID = nanoid();
  console.log(_id)
  console.log(category)
 
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
            return
          }

            dispatch(updateSection(
               {
                _id,
                idSort,
                category: newSectionName,              
              } ));
                setNewSectionName('');
              closeModal ();
      }; 
      
      function closeModalDelete () {
        setModalDeleteActive(false)
        document.body.style.overflow = '';
      };

      return ( 
        <Form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        >
          <>
        <FormInputList>
          <FormInputLabel htmlFor={sectionNameID}><LabelName>Change Name</LabelName></FormInputLabel>
          <FormInput 
          id={sectionNameID} 
          type="text" 
          name="newSectionName" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may "
          required
          defaultValue={category}
          onChange={handleChange} />
        </FormInputList>
        
<BtnList>
        <Button 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          padding: '0px 0px',
          minWidth: '80px',
          fontSize: 15,
          color: '#010101',
          marginRight: 'auto',
          marginLeft: 'auto',
          
        }}
    
      text="Rename"
      type="submit"
      />
      <Button 
        style={{
          position: 'relative',
          right: '0px',
          height: '25px',
          minWidth: '110px',
          fontSize: 15,
          color: '#632121',
          marginRight: 'auto',
          marginLeft: '25px',
        }}
    
      text="Delete Section"
      type="button"
      onClick={() => setModalDeleteActive(true)}
      />
   </BtnList>
              { modalDeleteActive && (
          <Modal
          onClick={() => closeModalDelete ()}
          active={modalDeleteActive}
          setActive={setModalDeleteActive}>
          <ModalSectionDelete
          closeModal={closeModalDelete}
          _id={_id}
          category={category}
          />
          </Modal>
         )}
        </>
        </Form>
        )
};