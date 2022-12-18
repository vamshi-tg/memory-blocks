import React from "react";

type HeaderProps = {
  turns: number;
  reset: () => void;
};

const Header = ({ turns, reset }: HeaderProps) => {
  return (
    <header className="App-header">
      <h1> Memory Blocks</h1>
      <button onClick={reset}> New Game </button>
      <div className="turns">
        <p>Turns: {turns} / 15</p>
      </div>
    </header>
  );
};

export default Header;
