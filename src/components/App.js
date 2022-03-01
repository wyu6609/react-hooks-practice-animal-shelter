import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  //filter handlers
  let updatedPets = pets.filter((el) => {
    if (el.type === filters) {
      return el;
    } else if (filters === "all") {
      return el;
    }
  });

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters} />
          </div>
          <div className="twelve wide column">
            <PetBrowser setPets={setPets} pets={updatedPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
