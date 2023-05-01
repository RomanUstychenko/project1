import React from 'react'
import { 
    // useSelector, 
    useDispatch } from 'react-redux';
    import { deleteItem, 
        //  geItemsByCategory
        } from "redux/items/items-operation";

export default function ModalItemDelete({_id, closeModal}) {


    const dispatch = useDispatch();

    function DelItem () {
        dispatch(deleteItem(_id));
        closeModal ();
      }

  return (
    <div
      onClick={e => e.stopPropagation()}
      // active={modalActive}
      >
        Do you really wont to delete?
          <button
          onClick={() => 
            
            {DelItem ()}} 
          >
            yes
          </button>
        
      </div>
  )
}
