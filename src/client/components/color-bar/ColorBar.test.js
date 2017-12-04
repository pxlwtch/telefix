import React from 'react';
import ReactDOM from 'react-dom';
import ColorBar from './ColorBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColorBar />, div);
});
