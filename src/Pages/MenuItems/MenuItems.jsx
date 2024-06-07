import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Sections,
  SectionForm,
  SectionWrap,
  // SectionWrapWrap,
  AddButton,
  AddButtonText,
} from './MenuItems.styled';

import { fetchItems } from 'redux/items/items-operation';
import { getItemsByCategory } from 'redux/items/items-selector';
// import { getSections } from 'redux/sections/sections-selector';
import { fetchSections } from 'redux/sections/sections-operation';

import { Modal } from 'components/common/Modal/Modal';
import ItemsSections from 'components/Section/ItemSections/ItemsSections';
import MenuItemsDetails from 'components/MenuItemsDetails/MenuItemsDetails';
import QROptions from 'components/QROptions/QROptions';
import ModalItemAddForm from '../../components/Item/ModalItemAddForm/ModalItemAddForm';
import ModalAddSectionForm from 'components/Section/ModalAddSectionForm/ModalAddSectionForm';
import QrResult from 'components/QRCode/QRCode';

// import { MenuContext } from './ToggleMenu/navState';
import HamburgerButton from './ToggleMenu/ToggleButton';
import NavState from 'Pages/MenuItems/ToggleMenu/navState';

export default function MenuItems() {
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const [modalActive, setModalActive] = useState(false);
  const [modalAddSectionActive, setModalAddSectionActive] = useState(false);
const   [modalQrActive, setModalQrActive] = useState(false);
const [moveSection, setMoveSection] = useState(false);

  const dispatch = useDispatch();
  const itemsCategory = useSelector(getItemsByCategory);
  // const sections = useSelector(getSections);

  useEffect(() => {
    console.log("useefect")
    dispatch(fetchItems());
    dispatch(fetchSections());
  }, [dispatch]);

const moveMenu = () => {
  
  setMoveSection(!moveSection)
  console.log("moveSection", moveSection)
}
// const scrollRef = useRef(null);
  // console.log(sections)
  const SideMenu = () => {
    // const { isMenuClose } = useContext(MenuContext);
    
// console.log("isMenuClose", isMenuClose)
    return (
      // <SectionWrapWrap>

          <SectionWrap 
          // ref={scrollRef}
          value={moveSection} >
          <HamburgerButton 
          // value={isMenuClose}
          moveMenu={moveMenu}
          moveSection={moveSection}
          />
          <SectionForm value={moveSection} >
            {/* <ul> */}
              {/* {sections.map((section) => (
                <ItemsSections 
                key={section._id}
                section={section}></ItemsSections>
              ))} */}
                 <ItemsSections 
                //  dispatch={dispatch}
                //  scrollRef={scrollRef}
                // key={section._id}
                ></ItemsSections>
            {/* </ul> */}
            <AddButton
              type="button"
              onClick={() =>setModalAddSectionActive(true)}
            >
              <AddButtonText>Add Section</AddButtonText>
            </AddButton>
          </SectionForm>
        </SectionWrap>
      //  </SectionWrapWrap>
    );
  };

  function closeModal() {
    setModalActive(false);
    setModalAddSectionActive(false);
    setModalQrActive(false);
    document.body.style.overflow = '';
  }
 

  return (
    <>
      <QROptions 
      setModalQrActive={setModalQrActive}/>
      {/* <CreateQrWrap>
      <CreateQr onClick={() => setModalQrActive(true)}
      >Create QR</CreateQr>
      </CreateQrWrap> */}
      
          {modalQrActive && (
            <Modal
            onClick={() => closeModal()}
            active={modalQrActive}
            setActive={setModalQrActive}
          >
            <QrResult></QrResult>
          </Modal>
          )

          }
      <Sections>
        <NavState>
          <SideMenu />
          {modalAddSectionActive && (
            <Modal
              onClick={() => closeModal()}
              active={modalAddSectionActive}
              setActive={setModalAddSectionActive}
            >
              <ModalAddSectionForm
                onClick={e => e.stopPropagation()}
                setModalSectionActive={setModalAddSectionActive}
              />
            </Modal>
          )}
          {modalActive && (
            <Modal
              onClick={() => closeModal()}
              active={modalActive}
              setActive={setModalActive}
            >
              <ModalItemAddForm
                onClick={e => e.stopPropagation()}
                setModalActive={setModalActive}
                category={category}
                itemsCategory={itemsCategory}
              />
            </Modal>
          )}
          <MenuItemsDetails 
          setModalActive={setModalActive}
          moveSection={moveSection}
          />
        </NavState>
      </Sections>
    </>
  );
}
