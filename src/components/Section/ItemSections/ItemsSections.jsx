import {useState} from 'react';
import { 
  // useSelector,
  useDispatch} from 'react-redux';
// import { getSections } from 'redux/sections/sections-selector';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { nanoid } from 'nanoid';
import {
  Button,
  FilterList,
  StyledChange,
  BtnChange,
  // Item,
  // Wrapper,
  // AuthLinks,
  // CommonLinks,
} from './ItemsSections.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';
// import { useEffect } from "react";
// import {  geItemsByCategory } from "redux/items/items-operation";
import { fetchSections } from "redux/sections/sections-operation"

// const btnId = nanoid();
// const sectionId = nanoid();



function ItemsSections({section}) {
  // const sections = useSelector(getSections);
  // console.log(section)
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
  // console.log(category)

  const buttons = [
    {
      btn: category,
      link: _id,
    }
  
  ];
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    
      <FilterList key={nanoid()}>
        
        
          {buttons.map(b => (
            // <Item key={btnId}>
              <Button 
              key={nanoid()}
              to={'/items/' + b.link} name={b.link}>
                {b.btn}
              </Button>
              
            //  </Item>
          ))}
          <BtnChange
          key={nanoid()}
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
