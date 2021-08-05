import React, { useState } from "react";
import {useHistory, Link} from 'react-router-dom';

export default function SearchBar ({user, handleFormSubmit, city, searchCity}) {
  const [citySearch, setCitySearch] = useState("");
  const history = useHistory();

  function handleInput(e) {
    setCitySearch(e.target.value);
  }

//   function handleSubmit(e) {
//     e.preventDefault();
//     handleFormSubmit(citySearch);
//   }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(citySearch);
    history.push(`/cities/${citySearch}`);
    
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

