// import { useEffect } from "react";
import  ModalItemForm  from "../../components/Item/ModalItemForm/ModalItemForm"
import ModalSectionForm from "components/Section/ModalSectionForm/ModalSectionForm"
// import {ItemList} from "../../components/Item/ItemList/ItemList"
import { 
  fetchItems,
  //  geItemsByCategory
   } from "redux/items/items-operation"
// import Filter from "../../components/filter/Filter"
import scss from "./MenuItems.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { getState } from 'redux/items/items-selector';
import { 
  // getItems,
   getItemsByCategory } from 'redux/items/items-selector';
import { getSections } from "redux/sections/sections-selector"
import { Modal } from "components/Modal/Modal";
import ItemsSections from "components/Section/ItemSections/ItemsSections"
import { useLocation,
  // useParams
  //  useSearchParams
   } from 'react-router-dom'
// import UseAuth from "components/hooks/useAuth"
// import { Navigate } from "react-router-dom"
import { fetchSections } from "redux/sections/sections-operation"
// import {  allUsers } from "redux/user/user-operation";
import MenuItemsDetails from "components/MenuItemsDetails/MenuItemsDetails"
import NavbarLive from "components/Navbar/NavbarLive/NavbarLive"

export default function MenuItems() {


  const location = useLocation();
  const category = location.pathname.split('/')[2];
  // console.log("category", category)
  const [modalActive, setModalActive] = useState(false);
  const [modalSectionActive, setModalSectionActive] = useState(false);



  function closeModal () {
    setModalActive(false)
    setModalSectionActive(false)
    document.body.style.overflow = '';
  }

  const dispatch = useDispatch();
  // const items = useSelector(getItems);
  const itemsCategory = useSelector(getItemsByCategory);
  const sections = useSelector(getSections);
  // console.log("sections", sections)
  // console.log(sections)
//  const {loading, error} = useSelector(getState);


      useEffect(() => {
        // dispatch(allUsers())
          dispatch(fetchItems());
          dispatch(fetchSections());
          
        
            // if (category === undefined) {
              
            // }
            // else {
             
            //   dispatch(geItemsByCategory({category: category}))
            // }
          
          }, 
           [ dispatch
            // category, 
            // , items
          ]
          );

    // const { category } = useParams();
    // console.log(category)
  return (
    <>
    <NavbarLive/>
    <div  className={scss.phoneBook}>
      <div className={scss.contactForm}>
        <ul>
          {sections.map(section =>
           <ItemsSections
           section={section}
           ></ItemsSections>)
        }
        </ul>
        <button
      type="button"
      onClick={() => setModalSectionActive(true)}>
        Add Section
      </button>
      { modalSectionActive && (
        <Modal
        onClick={() => closeModal ()}
        active={modalSectionActive}
        setActive={setModalSectionActive}>
        <ModalSectionForm 
        onClick={e => e.stopPropagation()}
        setModalSectionActive={setModalSectionActive}
        />
        </Modal>
      )}
      { modalActive && (
        <Modal
        onClick={() => closeModal ()}
        active={modalActive}
        setActive={setModalActive}>
        <ModalItemForm 
        onClick={e => e.stopPropagation()}
        setModalActive={setModalActive}
        category={category}
        itemsCategory={itemsCategory}
        />
        </Modal>
      )}
      </div>
      <MenuItemsDetails />
      {/* <div className={scss.contacts}>
      <h2>Menu</h2>
        <Filter />
          {!loading && items.length > 0 && 
          <ItemList
          items={items} 
          itemsCategory={itemsCategory}
          />}
          {loading && <p className={scss.contactsLoading}>...loading</p>}
          {error && <p>No items yet</p>}
      </div>
      <button
      type="button"
      onClick={() => setModalActive(true)}>
        Add Item
      </button> */}
    </div>
    </>
    )
};