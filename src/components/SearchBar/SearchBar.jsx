import React, { useState } from "react";

export default function SearchBar (props) {
  const [citySearch, setCitySearch] = useState("");

  function handleInput(e) {
    setCitySearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleFormSubmit(citySearch);
  }

  


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="citySearch">
        <b>Keyword: </b>
      </label>
      <input
        id="citySearch"
        type="text"
        placeholder="city name"
        value={citySearch}
        onChange={handleInput}
      />
      <button type="submit">Search</button>
    </form>
  );
}

