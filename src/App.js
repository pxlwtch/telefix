import React, { Component } from 'react';
import './App.css';
import SearchBar from './search-bar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Telefix</h2>
        </div>
        <p className="App-intro">
          Search for your favorite stream and figure out how long it takes to binge watch. :)
        </p>
      <SearchBar />
      </div>
    );
  }
}

export default App;
