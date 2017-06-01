import React from 'react';
import ReactDOM from 'react-dom';
import SMPTEBackground from './SMPTEBackground';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SMPTEBackground />, div);
});

