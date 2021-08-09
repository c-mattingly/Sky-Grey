import React, { useState } from "react";
import {useHistory, Link} from 'react-router-dom';

export default function SearchBar ({user, handleFormSubmit}) {
  const [citySearch, setCitySearch] = useState("");
  const history = useHistory();

  function handleInput(e) {
    setCitySearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(citySearch);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="citySearch">
        <b>Zip Code: </b>
      </label>
      <input
        id="citySearch"
        type="text"
        placeholder="zip code"
        value={citySearch}
        onChange={handleInput}
      />
      <button type="submit">Search</button><br/>
    </form>
  );
}

