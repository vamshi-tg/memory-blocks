import React, { useState } from "react";
import Back from "../images/react-logo.png";

type TCardProps = {
  id: number;
};

const Card = ({ id }: TCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" key={id}>
      <img
        src={Back}
        alt="card back"
        className="back"
        onClick={() => setFlipped((p) => !p)}
      />
    </div>
  );
};

export default Card;
