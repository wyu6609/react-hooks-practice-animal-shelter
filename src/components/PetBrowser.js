import React, { useEffect } from "react";
import Pet from "./Pet";
import { v4 as uuid } from "uuid";

function PetBrowser({ setPets, pets }) {
  useEffect(() => {
    fetchAPI();
  }, []);
  //GET request
  const fetchAPI = () => {
    fetch("http://localhost:3001/pets")
      .then((resp) => resp.json())
      .then((data) => setPets(data));
  };
  return (
    <div className="ui cards">
      {pets.map((pet) => {
        return <Pet key={uuid()} pet={pet} />;
      })}
    </div>
  );
}

export default PetBrowser;
