import {ItemList} from "../../components/Item/ItemList/ItemList"
import Filter from "../../components/filter/Filter"
import { ItemsList, ItemsLoading, BtnWrapper, AddItemButton, AddItemText } from "./MenuItemsDetails.styled";
import {  useSelector } from "react-redux";
import { getState } from 'redux/items/items-selector';
import { getItems, getItemsByCategory } from 'redux/items/items-selector';
// import { getSections } from "redux/sections/sections-selector"
import { useLocation } from 'react-router-dom'


export default function MenuItemsDetails({setModalActive}) {


  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const items = useSelector(getItems);
  const itemsCategory = useSelector(getItemsByCategory);
  // const sections = useSelector(getSections);
  const { error, loading} = useSelector(getState);

  return (
      <>
      <ItemsList>
      { category &&
       <>
        <Filter />
        
         <BtnWrapper>
   
        <AddItemButton
        type="button"
        onClick={() => setModalActive(true)}>
          <AddItemText>Add Item</AddItemText>
        </AddItemButton>
        </BtnWrapper>
        </>}

        {console.log(loading)}
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