import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../search.slice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div>
      <label htmlFor="searchbox">Search by caption:</label>
      <input
        id="searchbox"
        role="searchbox"
        type="text"
        onChange={handleChange}
        aria-label="Search by caption:"
      />
    </div>
  );
};

export default SearchBar;
