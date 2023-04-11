import scss from "./Filter.module.scss"
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
    <div className={scss.contactFilter}>
              <label
              className={scss.contactFilterLabel}
              htmlFor={findID}
              >Find contacts by name
              </label>
              <input 
              className={scss.contactFilterInput}
              type="text" 
              name="filter" 
              value={filters}
              onChange={handleChange}
              title="Search"
              required
              />
          </div>
)};

  export default Filter;