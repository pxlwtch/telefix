import React from 'react';
import ReactDOM from 'react-dom';
import InfoBar from './InfoBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoBar numOfHours={"4"} seriesName={"some series name"}/>, div);
});
