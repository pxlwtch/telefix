import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button 
        data-tip={this.props.dataTip}
        data-for={this.props.dataFor} 
        className={this.props.className + " button"}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
