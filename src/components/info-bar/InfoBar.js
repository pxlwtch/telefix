import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InfoBar.css';

class InfoBar extends Component {
  render() {
    return (
      <div className="info-bar-text">
        It will take you {this.props.numOfHours} to watch {this.props.seriesName}
      </div>
    );
  }
}

InfoBar.propTypes = {
  numOfHours: PropTypes.string.isRequired,
  seriesName: PropTypes.string.isRequired
};

export default InfoBar;
