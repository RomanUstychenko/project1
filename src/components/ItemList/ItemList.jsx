// import scss from "./ContactList.module.scss"
import { useSelector, 
  // useDispatch
 } from 'react-redux';
// import { useState } from 'react';
import { getItems,
  //  getItemsByCategory
   } from 'redux/items/items-selector';
import  { getFilter }from 'redux/filter/filter-selector';
// import { deleteItem,  geItemsByCategory} from "redux/items/items-operation";
import ItemInList from "components/ItemInList/ItemInList";

// import { useLocation,
//   //  useSearchParams
//    } from 'react-router-dom';
   

 export const ItemList = ({itemsCategory}) => {

  // const location = useLocation();

  // const category = location.pathname.split('/')[2];
// console.log("category", category)

// const dispatch = useDispatch();
console.log(itemsCategory)
    const items = useSelector(getItems);
    console.log(items)
    // const itemsCategory = useSelector(getItemsByCategory);

    const filter = useSelector(getFilter);
    // const dispatch = useDispatch();

    // if (category === "first") {dispatch(geItemsByCategory({category: category}))}

    const getFilteredItem = () => {
        if (!filter) {
          return itemsCategory;
        }
            const normalizedFilter = filter.toLocaleLowerCase();
            const filteredItem = itemsCategory.filter(({itemName}) => {
            const nornalizedName = itemName.toLocaleLowerCase();
            const result = nornalizedName.includes(normalizedFilter);
            return result;
          })
          return filteredItem;
        };

// console.log(items)
// if (category === items.section) {dispatch(geItemsByCategory({category: category}))}

    return (
      <>
            <ul>
            {getFilteredItem().map(filteredItem => 
              <ItemInList
              key={filteredItem._id}
              filteredItem={filteredItem}/>
     )} 
         </ul>
         
         </>
    )

         }