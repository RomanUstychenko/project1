import { 
  // useSelector, 
  useDispatch
 } from 'react-redux';
 import { useLocation } from 'react-router-dom';
 import { useEffect } from "react";

 import ItemsSize from './items';

import { List, Names, NamesList } from './ItemList.styled';
// import  { getFilter }from 'redux/filter/filter-selector';
import ItemInList from "components/Item/ItemInList/ItemInList";

// import { fetchSections } from "redux/sections/sections-operation"
import { geItemsByCategory } from "redux/items/items-operation"
import { nanoid } from '@reduxjs/toolkit';

 export const ItemList = ({itemsCategory, items}) => {

// console.log(itemsCategory)
  const location = useLocation();
  const category = location.pathname.split('/')[2];

const dispatch = useDispatch();

    // const filter = useSelector(getFilter);

    // const getFilteredItem = () => {
    //     if (!filter) {
    //       return itemsCategory;
    //     }
    //         const normalizedFilter = filter.toLocaleLowerCase();
    //         const filteredItem = itemsCategory.filter(({itemName}) => {
    //         const nornalizedName = itemName.toLocaleLowerCase();
    //         const result = nornalizedName.includes(normalizedFilter);
    //         return result;
    //       })
    //       return filteredItem;
    //     };

useEffect(() => {
  // dispatch(fetchSections());
    if (category === undefined) {
    }
    else {
      dispatch(geItemsByCategory({category: category}))
    }}, [ dispatch, category, items])
 
    const resultSize = ItemsSize();
    // console.log(resultSize)

    return (
      <>
            <List>
            <Names>
              {resultSize.map(({title, width})  => {
            return (
                <NamesList
                key={(nanoid())}
                style={{width}}
                >
                  <p
                style={{width}}
                >{title}</p></NamesList>
            )} )}
            
              </Names>
            {/* {getFilteredItem().map(filteredItem => 
              <ItemInList
              key={filteredItem._id}
              filteredItem={filteredItem}
              />
     )}  */}
         {/* {getFilteredItem().map(filteredItem =>  */}
              <ItemInList
              // key={filteredItem._id}
              // filteredItem={filteredItem}
              />
     {/* )}  */}
         </List>
         </>
    )};