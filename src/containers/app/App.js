import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './App.css';
import InfoBar from '../../components/info-bar/InfoBar';
import SearchBar from '../../components/search-bar/SearchBar';
import Button from '../../components/button/Button';
import SMPTEBackground from '../../components/smpte-background/SMPTEBackground';
import { 
  getTitlesFromSearch,
  searchAPIWithQuery
} from '../../api/tmdb';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedSeries: "",
      searchedSeason: "",
      numOfHours: "[x]",
      seriesName: "[y]",
      suggestions: [],
    };

    this.handleSeasonSearchChange = this.handleSeasonSearchChange.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSeasonSearchChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({searchedSeason: event.target.value});
  }

  // When suggestion is clicked, Autosuggest needs to populate the input element
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue(suggestion) { return suggestion.original_name; }

  // Use your imagination to render suggestions.
  renderSuggestion (suggestion) {
    return (
      <div>
        {suggestion.original_name}
      </div>
    );
  }
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }) {
    if(value && this.state.searchedSeries) {
       searchAPIWithQuery(this.state.searchedSeries)
      .then(getTitlesFromSearch)
      .then((result) => {
        this.setState({suggestions: result});
      });
    }
  }
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  onChange(event, { newValue }) {
    this.setState({
      searchedSeries: newValue
    });
  }

  render() {
    const {
      numOfHours,
      seriesName,
      suggestions,
      searchedSeries
    } = this.state;

    const inputProps = {
      placeholder: 'tv series',
      value: searchedSeries,
      onChange: this.onChange
    };

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
             <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              renderSuggestion={this.renderSuggestion}
              inputProps={inputProps}
            />
            <SearchBar
              placeholder="#"
              className="season-search"
              onChange={this.handleSeasonSearchChange}
            />
         </div>
          <Button buttonText="search" onClick={this.triggerSearch}/>
        </div>
        <div className="info-bar">
          <InfoBar numOfHours={numOfHours} seriesName={seriesName}/>
          <Button buttonText="use calendar" />
        </div>
      </div>
    );
  }
}

export default App;
