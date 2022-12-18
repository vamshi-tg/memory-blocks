import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Memory Blocks </h1>
        <button onClick={() => alert("Creating New game")}>New Game</button>
      </header>
    </div>
  );
}

export default App;
