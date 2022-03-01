import React, { useState } from "react";

function Filters({ setFilters }) {
  const [animalFilter, setAnimalFilter] = useState("all");

  const findPetsBtnHandler = () => {
    setFilters(animalFilter);
    console.log(animalFilter);
  };
  const animalFilterHandler = (event) => {
    setAnimalFilter(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select
          name="type"
          id="type"
          aria-label="type"
          onChange={animalFilterHandler}
        >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={findPetsBtnHandler}>
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;
