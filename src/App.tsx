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
  const [disabled, setDisabled] = useState(false);
  const [winner, setWinner] = useState(false);
  const [exceeds, setExceeds] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setWinner(false);
    setExceeds(false);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

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

  useEffect(() => {
    setTimeout(() => {
      const isTrue = cards.every((card) => card.matched === true);

      if (turns >= 15) {
        if (isTrue && turns === 15) {
          setWinner(true);
        } else {
          setExceeds(true); // Disbaled user from clicking on cards
          setDisabled(true);
        }
      } else if (isTrue && cards.length > 0) {
        setWinner(true);
      }
    }, 500);
  }, [turns, cards, winner]);

  const backToDefault = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const handleChoice = (card: TCard) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <Header turns={turns} reset={shuffleCards}></Header>
      {winner && <div className="result">Congratulations, You Win!!</div>}
      {exceeds && <div className="result">Uh Oh,You are out of Turns!!</div>}
      <Grid
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
      ></Grid>
    </div>
  );
}

export default App;
