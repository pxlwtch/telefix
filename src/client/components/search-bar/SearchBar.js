import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <input 
      className={props.className + " search-bar"}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.number
};

export default SearchBar;
