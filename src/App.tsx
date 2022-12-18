import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    // should shuffle cards
  };

  useEffect(() => {
    // Should shuffle cards on render
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <Header turns={turns} reset={shuffleCards}></Header>
      <Grid></Grid>
    </div>
  );
}

export default App;
