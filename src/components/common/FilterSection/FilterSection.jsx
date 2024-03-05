import { useSelector } from 'react-redux';
import { getSections } from "redux/sections/sections-selector"



// export const FilterSection = () => {
//     const sections = useSelector(getSections);

//   const filter = sections.filter(data => data._id === section)
//   const filterResult = filter.map(fi => fi.category)

//   return filterResult;
// };