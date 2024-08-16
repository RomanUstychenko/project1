import { useRef,
  //  useState
   } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ItemsFilter,
  ItemFilterInput,
  SearchIcon,
  DeleteInput,
} from './Filter.styled';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';


const Filter = ({ primary } ) => {
  // console.log("primary", primary)
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // const [filterValue, setFilterValue] = useState('');
  // console.log("filterValue", filterValue)

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
    // setFilterValue(e.target.value)
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDeleteClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      dispatch(setFilter(''));
      // setFilterValue('');
    }
  };

  return (
    <ItemsFilter
     $primary={primary}>
      <SearchIcon
       onClick={handleIconClick} />
      <ItemFilterInput
        ref={inputRef}
        type="text"
        name="filter"
        value={filters}
        // inputvalue={filterValue}
        onChange={handleChange}
        title="Search"
        placeholder="search"
        required
      />
      <DeleteInput  onClick={handleDeleteClick} />
    </ItemsFilter>
  );
};

export default Filter;
