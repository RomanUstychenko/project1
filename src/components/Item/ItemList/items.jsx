
 import useResize from "components/hooks/useResize";




 function ItemsSize ()  {

const resultSize = useResize();

console.log(resultSize)

   const namesItem = [
      
        {title: "Name",
          width: "100%"},
        {title: "Price",
        width: resultSize.priceSize()},
        {title: "Section",
        width: resultSize.sectionSize()}
    ];
return namesItem;
 }


 export default ItemsSize;