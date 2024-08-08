import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ItemsFilter,
  ItemFilterInput,
  SearchIcon,
  DeleteInput,
} from './Filter.styled';
import { getFilter } from 'redux/filter/filter-selector';
import { setFilter } from 'redux/filter/filter-slice';

const Filter = ({ primary }) => {
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
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
    }
  };

  return (
    <ItemsFilter primary={primary}>
      <SearchIcon onClick={handleIconClick} />
      <ItemFilterInput
        ref={inputRef}
        type="text"
        name="filter"
        value={filters}
        onChange={handleChange}
        title="Search"
        placeholder="search"
        required
      />
      <DeleteInput onClick={handleDeleteClick} />
    </ItemsFilter>
  );
};

export default Filter;
