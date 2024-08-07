import { ItemsFilter,
  //  ItemFilterLabel,
    ItemFilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import  { getFilter }from 'redux/filter/filter-selector';
// import { nanoid } from "nanoid";
import { setFilter } from "redux/filter/filter-slice";

const Filter = ({ primary }) => {

    const filters = useSelector(getFilter);
    const dispatch = useDispatch();

    // const findID = nanoid();

    const  handleChange = (e) => {
        const {value} = e.target;
        dispatch(setFilter(value))
      };

return (
    <ItemsFilter
    primary={primary}>
              {/* <ItemFilterLabel
              
              htmlFor={findID}
              >Find items by name
              </ItemFilterLabel> */}
              <ItemFilterInput 
              type="text" 
              name="filter" 
              value={filters}
              onChange={handleChange}
              title="Search"
              placeholder='search'
              required
              />
          </ItemsFilter>
)};

  export default Filter;