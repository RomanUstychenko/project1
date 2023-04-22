// import { useEffect } from "react";
import  ItemForm  from "../../components/ItemForm/ItemForm"
import {ItemList} from "../../components/ItemList/ItemList"
import { fetchItems, geItemsByCategory } from "redux/items/items-operation"
import Filter from "../../components/filter/Filter"
import scss from "./MenuItems.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getState } from 'redux/items/items-selector';
import { getItems, getItemsByCategory } from 'redux/items/items-selector';
import { Modal } from "components/Modal/Modal";
import ItemsSections from "components/ItemSections/ItemsSections"
import { useLocation,
  //  useSearchParams
   } from 'react-router-dom'
// import UseAuth from "components/hooks/useAuth"
// import { Navigate } from "react-router-dom"

export default function MenuItems() {


  const location = useLocation();
  const category = location.pathname.split('/')[2];
  console.log("category", category)
  const [modalActive, setModalActive] = useState(false);




  function closeModal () {
    setModalActive(false)
    document.body.style.overflow = '';
  }

  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const itemsCategory = useSelector(getItemsByCategory);
  console.log(itemsCategory)
 const {loading, error} = useSelector(getState);




      useEffect(() => {
          dispatch(fetchItems());
          // if (category === undefined) {
          //   console.log("undef")
          // }
          // else 
          
          // {
          //   console.log("else")
          //   dispatch(geItemsByCategory({category: category}))
          // }
          // const itemsByCateg = () => {
            if (category === undefined) {
              console.log("undef")
            }
            else {
              console.log("else")
              dispatch(geItemsByCategory({category: category}))
            }
          // }
          }, 
           [dispatch, category]
          );
  return (
    <div  className={scss.phoneBook}>
      <div className={scss.contactForm}>
      <ItemsSections></ItemsSections>
      { modalActive && (
        <Modal
        onClick={() => closeModal ()}
        active={modalActive}
        setActive={setModalActive}>
        <ItemForm 
        onClick={e => e.stopPropagation()}
        setModalActive={setModalActive}
        />
        </Modal>
      )}
      </div>
      <div className={scss.contacts}>
      <h2>Menu</h2>
        <Filter />
          {!loading && items.length > 0 && 
          <ItemList
          items={items} 
          itemsCategory={itemsCategory}
          />}
          {loading && <p className={scss.contactsLoading}>...loading</p>}
          {error && <p>oops, something went wrong</p>}
      </div>
      <button
      type="button"
      onClick={() => setModalActive(true)}>
        Add Item
      </button>
    </div>
    )
};