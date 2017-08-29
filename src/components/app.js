import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
import style from '../../style/style.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
