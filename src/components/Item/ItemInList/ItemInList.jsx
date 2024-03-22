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
} from './ItemInList.styled';
import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';

import ModalItemDetail from '../ModalItemDetail/ModalItemDetail';
import ModalItemDelete from '../ModalItemDelete/ModalItemDelete';
import { fetchItems } from 'redux/items/items-operation';
// import { FilterSection } from 'components/common/FilterSection/FilterSection';
import { MenuContext } from 'Pages/MenuItems/ToggleMenu/navState';

import { getSections } from "redux/sections/sections-selector"


export default function ItemInList({ filteredItem }) {

  const { isMenuClose } = useContext(MenuContext);
  
  const filteredItemId = nanoid();
  const { itemName, description, price, itemImg, _id, section } = filteredItem;


// console.log(resultSize)

// const newArr = resultSize.map(({width}) => (width))


  const dispatch = useDispatch();

  const [modalDeleteActive, setModalDeleteActive] = useState(false);
  const [modalDetailActive, setModalDetailActive] = useState(false);

  function closeModal() {
    dispatch(fetchItems());
    setModalDeleteActive(false);
    setModalDetailActive(false);
    document.body.style.overflow = '';
  };

  const sections = useSelector(getSections);

const filter = () => {
  const filterSection =  
  sections.filter(data => data._id === section)
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

  return (
    <>
      {filteredItem && (
        
        <ItemsList key={nanoid()}>
         
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
         
      )}

      {modalDeleteActive && (
        <Modal
          onClick={() => closeModal()}
          active={modalDeleteActive}
          setActive={setModalDeleteActive}
        >
          <ModalItemDelete closeModal={closeModal} _id={_id} />
        </Modal>
      )}
      {modalDetailActive && (
        <Modal
          onClick={() => closeModal()}
          active={modalDetailActive}
          setActive={setModalDetailActive}
        >
          <ModalItemDetail
            itemName={itemName}
            price={price}
            description={description}
            itemImg={itemImg}
            _id={_id}
            section={section}
            closeModal={closeModal}
            filter={filter}
            // setModalDetailActive={setModalDetailActive}
          />
        </Modal>
      )}
    </>
  );
}
