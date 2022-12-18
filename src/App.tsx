import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { TCard } from "./components/types";
import { cardImages } from "./constants/images";

function App() {
  const [turns, setTurns] = useState(0);
  const [cards, setCards] = useState<TCard[]>([]);
  const [choiceOne, setChoiceOne] = useState<TCard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<TCard | null>(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random())
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        backToDefault();
      } else {
        setTimeout(() => backToDefault(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  const backToDefault = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

  const handleChoice = (card: TCard) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <Header turns={turns} reset={shuffleCards}></Header>
      <Grid
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
      ></Grid>
    </div>
  );
}

export default App;
