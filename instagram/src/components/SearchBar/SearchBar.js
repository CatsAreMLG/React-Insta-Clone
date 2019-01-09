import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <input
          className="searchbar"
          type="text"
          placeholder="Search"
          value={this.props.searchInput}
          onChange={this.props.search}
        />
      </div>
    );
  }
}

export default SearchBar;
