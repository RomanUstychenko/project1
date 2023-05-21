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
  // Item,
  // Wrapper,
  // AuthLinks,
  // CommonLinks,
} from './ItemsSections.styled';
import { Modal } from 'components/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';
// import { useEffect } from "react";
// import {  geItemsByCategory } from "redux/items/items-operation";
import { fetchSections } from "redux/sections/sections-operation"

// const btnId = nanoid();
// const sectionId = nanoid();

// const authButtons = [
//   {
//     btn: 'favorite ads',
//     link: 'favorites-ads',
//   },
//   {
//     btn: 'my ads',
//     link: 'my-ads',
//   },
// ];

function ItemsSections({section}) {
  // const sections = useSelector(getSections);
  // console.log(section)
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  function closeModal () {
    setModalActive(false)
    
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
    // <Wrapper>
      <FilterList key={nanoid()}>
        {/* <CommonLinks> */}
          {buttons.map(b => (
            // <Item key={btnId}>
              <Button 
              key={nanoid()}
              to={'/items/' + b.link} name={b.link}>
                {b.btn}
              </Button>
              
            //  </Item>
          ))}
          <button
          key={nanoid()}
          onClick={() => setModalActive(true)}>
                change
              </button>
              { modalActive && (
          <Modal
          onClick={() => closeModal ()}
          active={modalActive}
          setActive={setModalActive}>
          <ModalChangeSectionName
          closeModal={closeModal}
          _id={_id}
          category={category}
          />
     
          </Modal>
         )}
        {/* </CommonLinks> */}
        {/* <AuthLinks>
          {isLoggedIn &&
            authButtons.map(b => (
              <Item key={nanoid()}>
                <Button to={'/items/' + b.link} name={b.link}>
                  {b.btn}
                </Button>
              </Item>
            ))}
        </AuthLinks> */}
      </FilterList>
    // </Wrapper>
  );
}

export default ItemsSections;
