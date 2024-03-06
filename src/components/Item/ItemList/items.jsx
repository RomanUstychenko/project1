
 import useResize from "components/hooks/useResize";
 import { nameWidth, priceWidth, sectionWidth } from 'components/Item/ItemInList/ItemInList.styled';



 function ItemsSize ()  {

const windowSize = useResize();

const nameSize =() =>
{
  if (windowSize.width > "1279") {
    //// desktop//////
    return nameWidth[2]
  }
  if (windowSize.width > "767") {
    //// tablet//////
    return nameWidth[1]
  }
  if (windowSize.width > "359") {
    //// tablet//////
    return nameWidth[0]
  }
  else {
    return
  }
};
const priceSize =() =>
{
if (windowSize.width > "1279") {
  //// desktop//////
  return priceWidth[1]
}
if (windowSize.width > "767") {
  //// tablet//////
  return priceWidth[0]
}
else {
  return
}
};

const sectionSize =() =>
{
if (windowSize.width > "1279") {
  //// desktop////// 
  return sectionWidth[1]
}
if (windowSize.width > "767") {
  //// tablet////// 
  return sectionWidth[0]
}
else {
  return
}
};

const nameItem = [
    
{title: "Name",
  width: nameSize()},
{title: "Price",
width: priceSize()},
{title: "Section",
width: sectionSize()}
];


return nameItem;
 }


 export default ItemsSize;