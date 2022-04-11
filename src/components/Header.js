import React, { useState } from "react";

function Header(props) {
  const [search, setSearch] = useState("");
  function onSearchChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit() {
    props.onSearch(search);
  }
  return (
    <div>
      <h1 className="header">Gallery</h1>
      <div className="header-search">
        <input
          className="header-search_input"
          value={search}
          placeholder="Search by keys"
          onChange={onSearchChange}
        />
        <button className="header-search_button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
