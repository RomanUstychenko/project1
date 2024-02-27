import  ModalItemAddForm  from "../../components/Item/ModalItemAddForm/ModalItemAddForm"
import ModalAddSectionForm from "components/Section/ModalAddSectionForm/ModalAddSectionForm"
import {   fetchItems, } from "redux/items/items-operation"
import { Sections, SectionForm, SectionWrap, AddButton, AddButtonText} from "./MenuItems.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {  getItemsByCategory } from 'redux/items/items-selector';
import { getSections } from "redux/sections/sections-selector"
import { Modal } from "components/common/Modal/Modal";
import ItemsSections from "components/Section/ItemSections/ItemsSections"
import { useLocation } from 'react-router-dom'
import { fetchSections } from "redux/sections/sections-operation"
import MenuItemsDetails from "components/MenuItemsDetails/MenuItemsDetails"
import NavbarLive from "components/Navbar/NavbarLive/NavbarLive"
// import { Button } from "components/Button/Button";

import React, { 
  // useRef,
   useContext } from 'react';
import { MenuContext } from "./ToggleMenu/navState";
import HamburgerButton from './ToggleMenu/ToggleButton';
import { SideMenus } from './ToggleMenu/SideMenus';
import NavState from "Pages/MenuItems/ToggleMenu/navState";




export default function MenuItems() {
  const { isMenuClose } = useContext(MenuContext);

  const location = useLocation();
  const category = location.pathname.split('/')[2];
  // console.log("category", category)
  const [modalActive, setModalActive] = useState(false);
  const [modalAddSectionActive, setModalAddSectionActive] = useState(false);
  // const [ModalChangeSectionActive, setModalChangeSectionActive] = useState(false);


  const dispatch = useDispatch();
  const itemsCategory = useSelector(getItemsByCategory);
  // console.log(itemsCategory)
  const   sections = useSelector(getSections);
// const sect = sections.map(({_id, category}) => ({_id, category}));
// console.log(sect)
// console.log(sections)
  const SideMenu = () => {
    const { isMenuClose } = useContext(MenuContext);
    // console.log(isMenuClose)
  
    return (
  <>
      <SectionWrap 
      // ref={node}
      close={isMenuClose}
      >
         <HamburgerButton
         close={isMenuClose}
         />
  <SectionForm close={isMenuClose}
      >
        <ul>
          {sections.map(section =>
           <ItemsSections
           section={section}
           ></ItemsSections>)
        }
        </ul>
              <AddButton
      type="button"
      onClick={() => setModalAddSectionActive(true)}>
        <AddButtonText>Add Section</AddButtonText>
      </AddButton>
       </SectionForm>
      </SectionWrap>
      </>
  );
  };;

  function closeModal () {
    setModalActive(false)
    setModalAddSectionActive(false)
    // setModalChangeSectionActive(false)
    document.body.style.overflow = '';
  }

      useEffect(() => {
          dispatch(fetchItems());
          dispatch(fetchSections());
          }, 
           [ dispatch]);

  return (
  
    <>
    <NavbarLive/>
    <Sections  >
     
    <NavState>
  
       {/* <SideMenu /> */}
       <SideMenus
       isMenuClose={isMenuClose}>
       <>
       {console.log("isMenuClose", isMenuClose)}
      <SectionWrap 
      // ref={node}
      close={isMenuClose}
      >
         <HamburgerButton
         close={isMenuClose}
         />
  <SectionForm close={isMenuClose}
      >
        <ul>
          {sections.map(section =>
           <ItemsSections
           section={section}
           ></ItemsSections>)
        }
        </ul>
              <AddButton
      type="button"
      onClick={() => setModalAddSectionActive(true)}>
        <AddButtonText>Add Section</AddButtonText>
      </AddButton>
       </SectionForm>
      </SectionWrap>
      </>
       </SideMenus>
      
      { modalAddSectionActive && (
        <Modal
        onClick={() => closeModal ()}
        active={modalAddSectionActive}
        setActive={setModalAddSectionActive}>
        <ModalAddSectionForm 
        onClick={e => e.stopPropagation()}
        setModalSectionActive={setModalAddSectionActive}
        />
        </Modal>
      )}
      { modalActive && (
        <Modal
        onClick={() => closeModal ()}
        active={modalActive}
        setActive={setModalActive}>
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
      />
      </NavState>
    </Sections>
    </>
    )
};