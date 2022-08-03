import React from "react";
import Card from "./Card";

const Mainarea = () => {
  return (
    <div className="container my-3">
      <h1 className="text-center">Flipper</h1>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Mainarea;
