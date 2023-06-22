import React from "react";

interface CardProps {
  id: string;
  name: string;
  description: string;
  code: number;
  photos: string[];
  category: string;
  price: number;
  stock: number;
  heading: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  code,
  photos,
  category,
  price,
  stock,
  heading,
}) => {
  return (
    <div className="card">
      <img src={photos[0]} alt={name} className="img-card"/>
      <h3 className="card-name">{name}</h3>
      <p className="card-price">{price}$</p>
      <p>{heading}</p>
    </div>
  );
};

export default Card;