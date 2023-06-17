import React from 'react'
import { useDispatch } from 'react-redux';
    import { deleteSection } from "redux/sections/sections-operation";
import { delItemsByCategory } from 'redux/items/items-operation';
import { Button } from 'components/Button/Button';
export default function ModalSectionDelete({_id, closeModal}) {


    const dispatch = useDispatch();
console.log(_id)
    function DelSection () {
        dispatch(delItemsByCategory(_id));
        dispatch(deleteSection(_id));
        closeModal ();
      }
    

  return (
    <div
      onClick={e => e.stopPropagation()}
      // active={modalActive}
      >
       <p>Do you really wont to delete?
        all items will also be deleted</p> 

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
    
      text="Yes"
      type="button"
      onClick={() => {DelSection ()}}
      />
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
    
      text="No"
      type="button"
      onClick={() => closeModal ()}
      />
       
        
      </div>
  )
}
