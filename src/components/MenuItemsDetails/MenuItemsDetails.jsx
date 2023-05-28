// import { useEffect } from "react";
// import  ModalItemForm  from "../../components/Item/ModalItemForm/ModalItemForm"
// import ModalSectionForm from "components/Section/ModalSectionForm/ModalSectionForm"
import {ItemList} from "../../components/Item/ItemList/ItemList"
// import { 
//   fetchItems,
//   //  geItemsByCategory
//    } from "redux/items/items-operation"
import Filter from "../../components/filter/Filter"
import { ItemsList, ItemsLoading, BtnWrapper, BtnAdd } from "./MenuItemsDetails.styled";
import { 
  // useDispatch, 
  useSelector } from "react-redux";
// import {
//   //  useEffect,
//     useState } from "react";
import { getState } from 'redux/items/items-selector';
import { getItems, getItemsByCategory } from 'redux/items/items-selector';
import { getSections } from "redux/sections/sections-selector"
// import { Modal } from "components/Modal/Modal";
// import ItemsSections from "components/Section/ItemSections/ItemsSections"
// import {
//   //  useLocation,
//   useParams
//   //  useSearchParams
//    } from 'react-router-dom'
// import UseAuth from "components/hooks/useAuth"
// import { Navigate } from "react-router-dom"
// import { fetchSections } from "redux/sections/sections-operation"
// import {  allUsers } from "redux/user/user-operation";
export default function MenuItemsDetails({setModalActive}) {


  // const location = useLocation();
//   const categorys = location.pathname.split('/')[2];
  // console.log("category", category)
  // const [modalActive, setModalActive] = useState(false);
//   const [modalSectionActive, setModalSectionActive] = useState(false);



//   function closeModal () {
//     setModalActive(false)
//     setModalSectionActive(false)
//     document.body.style.overflow = '';
//   }

//   const dispatch = useDispatch();
  const items = useSelector(getItems);
  const itemsCategory = useSelector(getItemsByCategory);
  const sections = useSelector(getSections);
  console.log("sections", sections)
  // console.log(sections)
 const {loading, error} = useSelector(getState);


    //   useEffect(() => {
       
    //       dispatch(fetchItems());
    //       dispatch(fetchSections());
        
          
    //       }, 
    //        [ dispatch
         
    //       ]
    //       );

    // const { category } = useParams();
    // console.log(category)
  return (
    // <div  className={scss.phoneBook}>
      <>
      <ItemsList>
      <h2>Menu</h2>
        <Filter />
        <BtnWrapper>
        <BtnAdd
      type="button"
      onClick={() => setModalActive(true)}>
        Add Item
      </BtnAdd>
        </BtnWrapper>
        
          {!loading && items.length > 0 && 
          <ItemList
          items={items} 
          itemsCategory={itemsCategory}
          />}
          {loading && <ItemsLoading >...loading</ItemsLoading>}
          {error && <p>No items yet</p>}
      </ItemsList>
      
      </>
    // </div>
    )
};