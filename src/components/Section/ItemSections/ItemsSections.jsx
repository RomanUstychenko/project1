import {useState} from 'react';
import { useDispatch} from 'react-redux';

import { fetchSections } from "redux/sections/sections-operation"

import {
  Button,
  FilterList,
  StyledChange,
  BtnChange,
} from './ItemsSections.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';

function ItemsSections({section}) {
 
  const [ModalChangeSectionActive, setModalChangeSectionActive] = useState(false);
  const dispatch = useDispatch();
  function closeModal () {
    setModalChangeSectionActive(false)
    
    document.body.style.overflow = '';
    dispatch(fetchSections());
  }
  const { 
    _id,
    category,
  } = section;

  const buttons = [
    {
      btn: category,
      link: _id,
    }
  
  ];

  return (
    
      <FilterList
       key={section._id}
       >
          {buttons.map(b => (
              <Button 
              key={b.link}
              to={'/items/' + b.link} name={b.link}>
                {b.btn}
              </Button>
          ))}
          <BtnChange
          onClick={() => setModalChangeSectionActive(true)}>
                <StyledChange/>
              </BtnChange>
              { ModalChangeSectionActive && (
          <Modal
          onClick={() => closeModal ()}
          active={ModalChangeSectionActive}
          setActive={setModalChangeSectionActive}>
          <ModalChangeSectionName
          closeModal={closeModal}
          _id={_id}
          category={category}
          />
          </Modal>
         )}
        
      </FilterList>
    
  );
}

export default ItemsSections;