import React from "react";
import Card from "./Card";
import { TCard } from "./types";

type GridProps = {
  cards: TCard[];
  handleChoice: (card: TCard) => void;
  choiceOne: TCard | null;
  choiceTwo: TCard | null;
  disabled: boolean;
};

function Grid({ cards, handleChoice, choiceOne, choiceTwo, disabled }: GridProps) {
  return (
    <section className="card-grid">
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <Card
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          </div>
        );
      })}
    </section>
  );
}

export default Grid;
