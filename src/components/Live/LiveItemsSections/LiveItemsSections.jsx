import { nanoid } from 'nanoid';
import noimg from 'img/noimg.jpg'
import {List, 
  // ListLive,
   Title, ImgLive, ItemList, ItemsGroup, ItemTitle, ItemDescription, ItemPrice, ItemDescriptionList} from './LiveItemsSections.styled'
   import { useState } from 'react';
   import { Modal } from "components/common/Modal/Modal";
    // import LiveItemsList from "components/Live/LiveItemsList/LiveItemsList.jsx"
import  LiveModalItemDetail  from "components/Live/LiveModalItemDetail/LiveModalItemDetail.jsx"




function LiveItemsSections ({section, items, 
  // item
}) {

  

  const [modalDetailActive, setModalDetailActive] = useState(false);
  const [openDetailsId, setOpenDetailsId] = useState("");

  function openModal (list) {
    setOpenDetailsId(list._id)
    setModalDetailActive(true)
  }

  function closeModal () {
      setModalDetailActive(false)
      document.body.style.overflow = '';
    }


 
  const { 
    category,
  } = section;
  
  const groups = [
    {
      category: category,
      list: items,
      item: items.filter(item => item._id === openDetailsId)
    }
  
  ];
  


  


  return (
   <>
                  {groups.map(g => (
                  
              <List key={nanoid()}>
               <b> <Title
                key={nanoid()}>{g.category}</Title> </b>
                <ul>
                {g.list.map(list => (
                  
                <ItemList 
                
                key={list._id}
                onClick={() => openModal (list)}
                >
                  
                   <ItemsGroup>
                  <ItemTitle>{list.itemName}</ItemTitle>
                  <ItemDescriptionList>
                  <ItemDescription>{list.description}</ItemDescription>
                  </ItemDescriptionList>
                  
                  <ItemPrice> Price: {list.price} </ItemPrice>
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
              }

           { modalDetailActive && (
                <Modal
                onClick={() => closeModal ()}
                active={modalDetailActive}
                setActive={setModalDetailActive}
                >
                 {groups.map(g => (
                  <>
                    {g.item.map(i =>
                  <LiveModalItemDetail 
                itemName={i.itemName} 
                price={i.price}
                description={i.description}
                itemImg={i.itemImg}
                _id={i._id}
                section={category}
                closeModal={closeModal}
                setModalDetailActive={setModalDetailActive}
                />
                    )}
                   </>
                    ))}                                          
                </Modal>
               )}
       </>     
  );
}

export default LiveItemsSections;