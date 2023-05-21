import { nanoid } from 'nanoid';
import noimg from 'img/noimg.jpg'
import {List, ListLive, Title, ImgLive, ItemList, ItemsText, Item} from './LiveItemsSections.styled'

// const btnId = nanoid();
// const sectionId = nanoid();



function LiveItemsSections ({section, item}) {
 
  const { 
    category,
  } = section;
  
  const buttons = [
    {
      btn: category,
      list: item,
    }
  
  ];
  
  return (
   
      // <ListLive key={nanoid()}>     // </ListLive>

      <>
                  {buttons.map(b => (
              <List
              key={nanoid()}>
                <Title
                key={nanoid()}>{b.btn}</Title> 
                {b.list.map(list => (
                <ItemList 
                key={nanoid()}
                
                > <ItemsText>
                  <Item>  <p>{list.itemName}</p></Item>
                  <Item>  <p>{list.description}</p></Item>
                  <Item><p>Price</p>  <p>{list.price} </p></Item>
                  </ItemsText>
                  <ImgLive src={list.itemImg || noimg} alt="img" loading='lazy' />
                  
                  
                  </ItemList>
                ))}
              </List>
              
              )
              
              )}
       </>     
  
  );
}

export default LiveItemsSections;
