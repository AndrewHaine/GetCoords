import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <i className="fa fa-search"></i>
        <form>
          <input type="text" placeholder="Search for a place or address"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
