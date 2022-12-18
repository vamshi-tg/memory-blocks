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
    </header>
  );
};

export default Header;
