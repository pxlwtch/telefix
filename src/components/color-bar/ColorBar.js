import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ColorBar.css';

class ColorBar extends Component {
  render() {
    const colorStyle = { backgroundColor: this.props.color };

    return (<div style={colorStyle} className="color-bar" />);
  }
}

ColorBar.propTypes = {
  color: PropTypes.string.isRequired,
};

ColorBar.defaultProps = {
  color: "#7cc5f3"
}

export default ColorBar;

