import React, { useState } from "react";

function Pet({ pet }) {
  //adopt button state
  const [adopted, setAdopted] = useState(pet.isAdopted);
  const adoptBtnHandler = () => {
    setAdopted(!pet.isAdopted);
    console.log(pet.isAdopted);
    //patch request
    // fetch(`http://localhost:3001/pets/${pet.id}`, {
    //   method: "PATCH", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ isAdopted: adopted }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   });
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "male" ? "♂" : "♀" /*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{`Age: ${pet.age} years old`}</p>
          <p>{`Weight: ${pet.weight} lbs`}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted ? (
          <button className="ui disabled button" onClick={adoptBtnHandler}>
            Already adopted
          </button>
        ) : (
          <button className="ui primary button" onClick={adoptBtnHandler}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
