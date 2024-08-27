import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Sections,
  SectionForm,
  SectionWrap,
  MenuOptions,
  MenuOptionsKitchen,
  MenuOptionsBar,
  AddButton,
  AddButtonText,
} from './MenuItems.styled';

import { fetchItems } from 'redux/items/items-operation';
import { getItemsByCategory } from 'redux/items/items-selector';
// import { getSections } from 'redux/sections/sections-selector';
import { fetchSections } from 'redux/sections/sections-operation';
import { setMenuOptions } from 'redux/sections/sections-slice';
import { getMenuOptions } from 'redux/sections/sections-selector';

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

  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  console.log("category", category)

  const [modalActive, setModalActive] = useState(false);
  const [modalAddSectionActive, setModalAddSectionActive] = useState(false);
const   [modalQrActive, setModalQrActive] = useState(false);
const [moveSection, setMoveSection] = useState(false);

  const dispatch = useDispatch();
  const itemsCategory = useSelector(getItemsByCategory);
  // const sections = useSelector(getSections);
  const menuActive = useSelector(getMenuOptions);

  useEffect(() => {
    console.log("useefect")
    
    dispatch(fetchSections(menuActive));
    dispatch(fetchItems());
  }, [dispatch, menuActive]);

const moveMenu = () => {
  
  setMoveSection(!moveSection)
  console.log("moveSection", moveSection)
}
// const scrollRef = useRef(null);
  // console.log(sections)


  
  const kitchenActive = () => {
console.log("kitchenActive")
dispatch(setMenuOptions("kitchen"));

const currentPath = location.pathname;
const newPath = currentPath.split('/').slice(0, -1).join('/');
navigate(newPath);

console.log("menuActive", menuActive)
  };

  const barActive = () => {
    console.log("BarActive")
    dispatch(setMenuOptions("bar"));
    
    const currentPath = location.pathname;
const newPath = currentPath.split('/').slice(0, -1).join('/');
navigate(newPath);

console.log("menuActive", menuActive)
  };


  const SideMenu = () => {
  

    console.log("menuActive", menuActive)
    return (
      

          <SectionWrap 
          value={moveSection} >
          <HamburgerButton 
          moveMenu={moveMenu}
          moveSection={moveSection}
          />
          <MenuOptions value={moveSection}>
          <MenuOptionsKitchen
          onClick={() => kitchenActive()}
          >Menu Kitchen</MenuOptionsKitchen>
          <MenuOptionsBar
          onClick={() => barActive()}
          >Menu Bar</MenuOptionsBar>
          </MenuOptions >
          <SectionForm value={moveSection} >
           
                 <ItemsSections />
            
            
            <AddButton
              type="button"
              onClick={() =>setModalAddSectionActive(true)}
            >
              <AddButtonText>Add Section</AddButtonText>
            </AddButton>
          </SectionForm>
        </SectionWrap>
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
