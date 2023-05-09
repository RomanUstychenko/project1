import { nanoid } from 'nanoid';


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
   
      <ul key={nanoid()}>
                  {buttons.map(b => (
              <li  >
                <h2>{b.btn}</h2> 
                {b.list.map(list => (
                <li>
                  {<p>"Name" - {list.itemName}</p>} 
                  {<p>"Description" - {list.description}</p>}
                  {<p>"Price" - {list.price}</p>} 
                  </li>
                ))}
              </li>
              
              )
              
              )}
            
      </ul>
  );
}

export default LiveItemsSections;
