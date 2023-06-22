import React from "react";
import Card from "../Card/Card";
import productos from "../../data";

const Cards: React.FC = () => {
  return (
    <div className="cards">
      {productos.map((producto) => (
        <Card key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default Cards;