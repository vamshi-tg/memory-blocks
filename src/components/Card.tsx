import React from "react";
import Back from "../images/react-logo.png";

type TCardProps = {
  id: number;
};

const Card = ({ id }: TCardProps) => {
  return (
    <div className="card" key={id}>
      <img src={Back} alt="card back" className="back"/>
    </div>
  );
};

export default Card;
