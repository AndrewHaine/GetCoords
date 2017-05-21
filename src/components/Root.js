import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Map from './Map';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <aside className="sidebar">
            <SearchBar />
          </aside>
          <Map />
        </div>
      </div>
    );
  }
}

export default Root;
