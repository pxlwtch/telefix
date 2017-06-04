import React, { Component } from 'react';
import './SearchButton.css';

class SearchButton extends Component {
  render() {
    return (
      <button className={this.props.className + " search-button"}>
        search
      </button>
    );
  }
}

export default SearchButton;
