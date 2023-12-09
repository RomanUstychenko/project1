import { nanoid } from 'nanoid';
import noimg from 'img/noimg.jpg'
import {List, 
  // ListLive,
   Title, ImgLive, ItemList, ItemsGroup, ItemTitle, ItemDescription, Item} from './LiveItemsList.styled'
   import { useState } from 'react';
   import { Modal } from "components/common/Modal/Modal";
   import { fetchItems } from "redux/items/items-operation"; 
   import { 
    // useSelector, 
    useDispatch } from 'react-redux';
import  LiveModalItemDetail  from "components/Live/LiveModalItemDetail/LiveModalItemDetail.jsx"
// const btnId = nanoid();
// const sectionId = nanoid();



function LiveItemsList ({section, items, item, modalDetailActive, setModalDetailActive}) {

  const dispatch = useDispatch();

  // const [modalDetailActive, setModalDetailActive] = useState(false);

  function closeModal () {
    dispatch(fetchItems());
      setModalDetailActive(false)
      document.body.style.overflow = '';
    }
 
  const { 
    category,
  } = section;
  console.log("item", item)
  console.log("items", items)
  const buttons = [
    {
      btn: category,
      list: items,
    }
  
  ];
  // console.log("btn",)
  return (
   
      // <ListLive key={nanoid()}>     // </ListLive>

      <>
                  {/* {buttons.map(b => (
                  
              <List key={nanoid()}>
               <b> <Title
                key={nanoid()}>{b.btn}</Title> </b>
                <ul>
                {b.list.map(list => (
                  
                <ItemList 
                key={nanoid()}
                onClick={() => setModalDetailActive(true)}
                > <ItemsGroup>
                  <ItemTitle>  <p>{list.itemName}</p></ItemTitle>
                  <ItemDescription>  <p>{list.description}</p></ItemDescription>
                  <Item><p>Price:</p>  <p>{list.price} </p></Item>
                  </ItemsGroup>
                  <ImgLive 
                  src={list.itemImg || noimg} 
                  alt="img" 
                  loading='lazy' 
                  />
                  </ItemList>
                ))}
                </ul>
              </List>
              ) 
              )
              } */}

           {/* { modalDetailActive && ( */}
                <Modal
                onClick={() => closeModal ()}
                active={modalDetailActive}
                setActive={setModalDetailActive}
                
                >
                 {/* {item.map(i =>  */}
                  <LiveModalItemDetail 
                // onClick={e => e.stopPropagation()}
                itemName={item.itemName}
                price={item.price}
                description={item.description}
                itemImg={item.itemImg}
                _id={item._id}
                section={category}
                closeModal={closeModal}
                setModalDetailActive={setModalDetailActive}
      
                // onClick={e => e.stopPropagation()}
                />
                  {/* )}  */}
                
                </Modal>
               {/* )} */}
       </>     
  
  );
}

export default LiveItemsList;