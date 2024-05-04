import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'components/common/Modal/Modal';
import {
  ItemsList,
  ItemText,
  Item,
  DelItem,
  DelIcon,
  ItemPriceWrap,
  ItemPriceName,
  ItemPrice,
  ItemSectionWrap,
  ItemSection,
  ButtonWrap,
  MoveButtonSection,
  MoveUpSection,
  MoveDownSection
} from './ItemInList.styled';
import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';

import ModalItemDetail from '../ModalItemDetail/ModalItemDetail';
import ModalItemDelete from '../ModalItemDelete/ModalItemDelete';
import { fetchItems } from 'redux/items/items-operation';
// import { FilterSection } from 'components/common/FilterSection/FilterSection';
import { MenuContext } from 'Pages/MenuItems/ToggleMenu/navState';
import { getItemsByCategory } from 'redux/items/items-selector';
import { getSections } from "redux/sections/sections-selector"

import { itemUpdate } from "redux/items/items-operation"; 

import  { getFilter }from 'redux/filter/filter-selector';
export default function ItemInList(
  // {filteredItem}
) {

  const itemsCategory = useSelector(getItemsByCategory);
  
  console.log("itemsCategory", itemsCategory)
  const { isMenuClose } = useContext(MenuContext);
  
  const filteredItemId = nanoid();
  // const { itemName, description, price, itemImg, _id, section } = filteredItem;


// console.log(resultSize)

// const newArr = resultSize.map(({width}) => (width))


  const dispatch = useDispatch();

  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalDetailActive, setModalDetailActive] = useState(false);
const [idTarget, setIdTarget] =  useState("");

  // const [state, setState] = useState({
  //   idTarget: "",
  //   idSortTarget: "",
  //   itemNameTarget: "",
  //   priceTarget: "",
  //   descriptionTarget: "",
  //   itemImgTarget: "",
  //   sectionTarget: ""
  // });

  function closeModal() {
    dispatch(fetchItems());
    setModalDeleteActive(false);
    setModalDetailActive(false);
    // setState({
    //   idTarget: "",
    //   idSortTarget: "",
    //   itemNameTarget: "",
    //   priceTarget: "",
    //   descriptionTarget: "",
    //   itemImgTarget: "",
    //   sectionTarget: ""
    // })
    setIdTarget("")
    document.body.style.overflow = '';
  };

  const sections = useSelector(getSections);

const filter = (item) => {
  const filterSection =  
  sections.filter(data => data._id === item.section)
  const filterResult = filterSection.map(fi => fi.category)

  return filterResult;
};
console.log(isMenuClose)

function formatNumber(number) {
  Number(number)
    if (typeof number === 'number' && !isNaN(number)) {
    if (Number.isInteger(number)) {
      return number.toFixed(2); // Додаємо два знаки після коми, якщо число ціле
    } else {
      return number.toFixed(2); // Додаємо один знак після коми, якщо число має десяткову частину
    }
  } else {
    return "Invalid number";
  }
}
// console.log("filteredItem", filteredItem)

const handleItemDelete = (i) => {
  // setState({
  //   idTarget: i._id,
  //   // idSortTarget: b.idSort,
  //   // valueTarget: b.category,
  //   // modalChange: true,
  // })
  setIdTarget(i._id)
  setModalDeleteActive(true)
};

const handleItemDetail = (i) => {
  // setState({
  //   idTarget: i._id,
  //   idSortTarget: i.idSort,
  //   itemNameTarget: i.itemName,
  //   priceTarget: i.price,
  //   descriptionTarget: i.description,
  //   itemImgTarget: i.itemImg,
  //   sectionTarget: i.section
  // })
  setIdTarget(i._id)
  setModalDetailActive(true)
};

const handleUpSection = (item, index) => {
      console.log(item)  
  const upIdSort = itemsCategory[index - 1].idSort;  //// над поточним IdSort
  console.log(upIdSort)
  const tempIdSort = itemsCategory[index].idSort; //// поточний IdSort
  console.log(tempIdSort)
  const upElement = itemsCategory.find(item => item.idSort === upIdSort);
  console.log("upElement", upElement)
  


///// оновлення idSort поточного елемента /////////
  dispatch(itemUpdate(
    {_id: item._id,
      itemName: item.itemName,
      description: item.description,
       price: item.price,
      itemImg: item.itemImg,
      section: item.section,
      idSort: upIdSort
    
    } ));
 ///// оновлення idSort верхнього елемента /////////  
    dispatch(itemUpdate(
      {_id: upElement._id,
        itemName: upElement.itemName,
        description: upElement.description,
         price: upElement.price,
        itemImg: upElement.itemImg,
        section: upElement.section,
        idSort: tempIdSort
      
      } ));
      dispatch(fetchItems());
        }

        const handleDownSection = (item, index) => {
          console.log(item)  
      const downIdSort = itemsCategory[index + 1].idSort;  //// над поточним IdSort
      console.log(downIdSort)
      const tempIdSort = itemsCategory[index].idSort; //// поточний IdSort
      console.log(tempIdSort)
      const downElement = itemsCategory.find(item => item.idSort === downIdSort);
      console.log("downElement", downElement)
      
    
    
    ///// оновлення idSort поточного елемента /////////
      dispatch(itemUpdate(
        {_id: item._id,
          itemName: item.itemName,
          description: item.description,
           price: item.price,
          itemImg: item.itemImg,
          section: item.section,
          idSort: downIdSort
        
        } ));
     ///// оновлення idSort верхнього елемента /////////  
        dispatch(itemUpdate(
          {_id: downElement._id,
            itemName: downElement.itemName,
            description: downElement.description,
             price: downElement.price,
            itemImg: downElement.itemImg,
            section: downElement.section,
            idSort: tempIdSort
          
          } ));
          dispatch(fetchItems());
            }


            const activeItem = itemsCategory.filter((data) => data._id === idTarget)
 


            /////  Пошук елемента по назві /////////
     const filterItem = useSelector(getFilter);

    const getFilteredItem = () => {
        if (!filterItem) {
          return itemsCategory;
        }
            const normalizedFilter = filterItem.toLocaleLowerCase();
            const filteredItem = itemsCategory.filter(({itemName}) => {
            const nornalizedName = itemName.toLocaleLowerCase();
            const result = nornalizedName.includes(normalizedFilter);
            return result;
          })
          
          return filteredItem;
          
        };
 
 
 
 
            return (
    <>
      {/* {filteredItem && (
        
        <ItemsList key={nanoid()}>
          <div>
          <button>up</button>
         <button>up</button>
          </div>
         
             <Item onClick={() => setModalDetailActive(true)} key={filteredItemId}>
             
             <ItemText
             value={isMenuClose}
             >{itemName}</ItemText>
             <ItemPriceWrap>
               <ItemPriceName>Price:</ItemPriceName> <ItemPrice>{ formatNumber(price)}</ItemPrice>
             </ItemPriceWrap>
             <ItemSectionWrap><ItemSection>{filter()}</ItemSection></ItemSectionWrap>
             </Item>
           <DelItem onClick={() => setModalDeleteActive(true)}>
             <DelIcon />
           </DelItem>
           
       </ItemsList>
         
      )} */}

      {/* {itemsCategory.map((item, index) => ( */}
        {getFilteredItem().map((item, index) => (
        <ItemsList key={nanoid()}>
          
          <ButtonWrap>
          {index !== 0 && (
          <MoveButtonSection
          onClick={() => handleUpSection(item, index)}
          ><MoveUpSection/></MoveButtonSection>
          )}
          {index !== itemsCategory.length - 1 && (
         <MoveButtonSection
          onClick={() => handleDownSection(item, index)}
         ><MoveDownSection/></MoveButtonSection>
          )}
          </ButtonWrap>
             <Item onClick={() => handleItemDetail(item)} key={filteredItemId}>
             
             <ItemText
             value={isMenuClose}
             >{item.itemName}</ItemText>
             <ItemPriceWrap>
               <ItemPriceName>Price:</ItemPriceName> <ItemPrice>{ formatNumber(item.price)}</ItemPrice>
             </ItemPriceWrap>
             <ItemSectionWrap><ItemSection>{filter(item)}</ItemSection></ItemSectionWrap>
             </Item>
           <DelItem onClick={() => handleItemDelete(item)}>
             <DelIcon />
           </DelItem>
           
       </ItemsList>

      ))}

      {modalDeleteActive && (
        <Modal
          onClick={() => closeModal()}
          active={modalDeleteActive}
          setActive={setModalDeleteActive}
        >
          <ModalItemDelete 
          closeModal={closeModal} 
          _id={idTarget} />
        </Modal>
      )}
      {modalDetailActive && (
        <Modal
          onClick={() => closeModal()}
          active={modalDetailActive}
          setActive={setModalDetailActive}
        >
          <ModalItemDetail
            // itemName={state.itemNameTarget}
            // price={state.priceTarget}
            // description={state.descriptionTarget}
            // itemImg={state.itemImgTarget}
            _id={idTarget}
            // section={state.sectionTarget}
            // state={state}
            // setState={setState}
            activeItem={activeItem}
            closeModal={closeModal}
            // filter={filter}
            // setModalDetailActive={setModalDetailActive}
          />
        </Modal>
      )}
    </>
  );
}
