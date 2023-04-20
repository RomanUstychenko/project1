// import { useEffect } from "react";
import  ItemForm  from "../../components/ItemForm/ItemForm"
import {ItemList} from "../../components/ItemList/ItemList"
import { fetchItems } from "redux/items/items-operation"
import Filter from "../../components/filter/Filter"
import scss from "./MenuItems.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getState } from 'redux/items/items-selector';
import { getItems } from 'redux/items/items-selector';
import { Modal } from "components/Modal/Modal";
import ItemsSections from "components/ItemList/ItemSections/ItemsSections"
// import UseAuth from "components/hooks/useAuth"
// import { Navigate } from "react-router-dom"

export default function MenuItems() {

  const [modalActive, setModalActive] = useState(false);

  function closeModal () {
    setModalActive(false)
    document.body.style.overflow = '';
  }

  const dispatch = useDispatch();
  const items = useSelector(getItems);
 const {loading, error} = useSelector(getState);
      useEffect(() => {
          dispatch(fetchItems());
          }, [dispatch]);
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
          {!loading && items.length > 0 && <ItemList />}
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