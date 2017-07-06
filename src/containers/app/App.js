import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import ReactTooltip from 'react-tooltip';
import './App.css';
import InfoBar from '../../components/info-bar/InfoBar';
import SearchBar from '../../components/search-bar/SearchBar';
import Button from '../../components/button/Button';
import { telefixLogoPng } from '../../images/images';
import SMPTEBackground from '../../components/smpte-background/SMPTEBackground';
import {
  getTitlesFromSearch,
  searchAPIWithQuery,
  getTVShowFromId

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
      numOfSeasons: 0,
      numOfEpisodesPerSeason: 0,
      avgEpisodeTime: 0
    };

    this.handleSeasonSearchChange = this.handleSeasonSearchChange.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onChange = this.onChange.bind(this);
    this.triggerCalculation = this.triggerCalculation.bind(this);
  }

  handleSeasonSearchChange(event) {
    event.preventDefault();
    this.setState({searchedSeason: event.target.value});
  }

  // When suggestion is clicked, Autosuggest needs to populate the input element
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue(suggestion) { 
    getTVShowFromId(suggestion.id)
    .then((result) => {
      console.log(result);
      this.setState({
        numOfSeasons: result.number_of_seasons,
        numOfEpisodesPerSeason: result.number_of_episodes / result.number_of_seasons,
        avgEpisodeTime: result.episode_run_time.reduce((a,e) => a + e, 0) / result.episode_run_time.length,
        searchedSeason: result.number_of_seasons
      });
    });

    return suggestion.original_name;
  }

  renderSuggestion (suggestion) {
    return (
      <div className="suggestion-option">
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

  triggerCalculation() {
    this.setState({
      seriesName: this.state.searchedSeries,
      numOfHours: `${(this.state.avgEpisodeTime * this.state.searchedSeason * this.state.numOfEpisodesPerSeason)/ 60} hours`
    });
  }

  render() {
    const {
      numOfHours,
      seriesName,
      suggestions,
      searchedSeries,
      searchedSeason
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
          <div className="item-1">
            <img alt="Telefix logo" src={telefixLogoPng} />
          </div>
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
              value={searchedSeason}
              onChange={this.handleSeasonSearchChange}
            />
         </div>
          <Button buttonText="calculate" onClick={this.triggerCalculation}/>
        </div>
        <div className="info-bar">
          <InfoBar numOfHours={numOfHours} seriesName={seriesName}/>
          <Button dataTip dataFor="useCalendarBtn" buttonText="use calendar" />
          <ReactTooltip id="useCalendarBtn">
            <span>under construction</span>
          </ReactTooltip>
        </div>
      </div>
    );
  }
}

export default App;
