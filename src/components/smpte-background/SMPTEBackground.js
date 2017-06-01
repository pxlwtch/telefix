import React, { Component } from 'react';
import ColorBar from '../color-bar/ColorBar';
import './SMPTEBackground.css';

class SMPTEBackground extends Component {
  render() {
    return (
      <div className="smpte-background">
        <ColorBar color="#fff" />
        <ColorBar color="#fff570" />
        <ColorBar color="#7cc5f3" />
        <ColorBar color="#8ccc46" />
        <ColorBar color="#e6b1dc" />
        <ColorBar color="#e64256" />
        <ColorBar color="#3b54a8" />
      </div>
    );
  }
}

export default SMPTEBackground;

