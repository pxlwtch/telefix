import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <input 
        className={this.props.className + " search-bar"}
        placeholder={this.props.placeholder}
      />
    );
  }
}

SearchBar.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchBar;
