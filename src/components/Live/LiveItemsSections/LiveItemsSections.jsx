import { nanoid } from 'nanoid';
import noimg from 'img/noimg.jpg'
import {List, 
  // ListLive,
   Title, ImgLive, ItemList, ItemsGroup, ItemTitle, ItemDescription, Item} from './LiveItemsSections.styled'

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
               <b> <Title
                key={nanoid()}>{b.btn}</Title> </b>
                <ul>
                {b.list.map(list => (
                  
                <ItemList 
                key={nanoid()}
                
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
              
              )}
       </>     
  
  );
}

export default LiveItemsSections;
