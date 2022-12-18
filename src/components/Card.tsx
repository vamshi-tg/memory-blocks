import Back from "../images/react-logo.png";
import { TCard } from "./types";

type CardProps = {
  card: TCard;
  flipped: boolean;
  handleChoice: (card: TCard) => void;
  disabled: boolean;
};

const Card = ({ card, flipped, handleChoice, disabled }: CardProps) => {
  const handleClick = () => {
    if (disabled) return;
    
    handleChoice(card);
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src={Back}
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
