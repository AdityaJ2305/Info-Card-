import React from "react";

function Introduction(prop) {
  return (
    <div className="box-model">
      <h1>Introduction</h1>
      <img src={prop.image} alt="Friends" width="40%" />
      <p>Name: {prop.name}</p>
      <p>Age: {prop.age}</p>
      <p>Course:{prop.course}</p>
    </div>
  );
}

export default Introduction;
