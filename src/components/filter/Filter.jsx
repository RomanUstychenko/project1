import { ItemsFilter, ItemFilterLabel, ItemFilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import  { getFilter }from 'redux/filter/filter-selector';
import { nanoid } from "nanoid";
import { setFilter } from "redux/filter/filter-slice";

const Filter = () => {

    const filters = useSelector(getFilter);
    const dispatch = useDispatch();

    const findID = nanoid();

    const  handleChange = (e) => {
        const {value} = e.target;
        dispatch(setFilter(value))
      };

return (
    <ItemsFilter>
              <ItemFilterLabel
              
              htmlFor={findID}
              >Find items by name
              </ItemFilterLabel>
              <ItemFilterInput 
              type="text" 
              name="filter" 
              value={filters}
              onChange={handleChange}
              title="Search"
              required
              />
          </ItemsFilter>
)};

  export default Filter;