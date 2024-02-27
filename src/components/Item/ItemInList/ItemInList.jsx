import { useDispatch } from 'react-redux';
import { Modal } from "components/common/Modal/Modal";
import {ItemsList, ItemText, Item, DelItem, DelIcon, Price } from './ItemInList.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';

  import ModalItemDetail from '../ModalItemDetail/ModalItemDetail';
  import ModalItemDelete from '../ModalItemDelete/ModalItemDelete';
  import { fetchItems } from "redux/items/items-operation"; 
  // import { Notify } from 'notiflix/build/notiflix-notify-aio';



export default function ItemInList({filteredItem}) {

  const filteredItemId = nanoid();
    const {
      itemName, 
      description,
      price,
      itemImg,
    _id,
section,
  } = filteredItem;

const dispatch = useDispatch();

const [modalDeleteActive, setModalDeleteActive] = useState(false);
const [modalDetailActive, setModalDetailActive] = useState(false);

function closeModal () {
  dispatch(fetchItems());
    setModalDeleteActive(false)
    setModalDetailActive(false)
    document.body.style.overflow = '';
  }

  return (
    <>
    
        {filteredItem && 
        <ItemsList key={nanoid()}> 
        <Item
        onClick={() => setModalDetailActive(true)}
        key={filteredItemId}
        >
         <ItemText>{itemName}</ItemText>
        <Price><b >Price:</b> <p>{price}</p></Price>
        </Item>
        <DelItem 
        onClick={() => setModalDeleteActive(true)}>
          <DelIcon/>
        </DelItem>
        </ItemsList>
        }
            
        { modalDeleteActive && (
          <Modal
          onClick={() => closeModal ()}
          active={modalDeleteActive}
          setActive={setModalDeleteActive}>
          <ModalItemDelete
          closeModal={closeModal}
          _id={_id}
          />
     
          </Modal>
         )}
            { modalDetailActive && (
          <Modal
          onClick={() => closeModal ()}
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
          // setModalDetailActive={setModalDetailActive}
          />
          </Modal>
         )}
    </>
  )
}
