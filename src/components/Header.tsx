import React from "react";

type HeaderProps = {
  turns: number;
  reset: () => void;
};

const Header = ({ turns, reset }: HeaderProps) => {
  return (
    <header className="App-header">
      <h1> Memory Blocks</h1>
      <button> New Game </button>
      <div>
        <p>Turns: {turns}/ 15</p>
      </div>
    </header>
  );
};

export default Header;
