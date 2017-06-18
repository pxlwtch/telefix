import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <input 
        className={this.props.className + " search-bar"}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchBar;
