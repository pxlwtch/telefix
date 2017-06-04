import React, { Component } from 'react';
import './App.css';
import SearchBar from '../../components/search-bar/SearchBar';
import SearchButton from '../../components/search-button/SearchButton';
import SMPTEBackground from '../../components/smpte-background/SMPTEBackground';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SMPTEBackground />
        <div className="App-header">
          <div className="item-1">logo</div>
          <div className="item-2">recents</div>
        </div>
        <div className="title-container">
          <h1 className="title">telefix</h1>
          <div className="bars-container">
            <SearchBar
              placeholder="tv series"
              className="text-search"
            />
            <SearchBar
              placeholder="#"
              className="season-search"
            />
          </div>
          <SearchButton />
        </div>
      </div>
    );
  }
}

export default App;
