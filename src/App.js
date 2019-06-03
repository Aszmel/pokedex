import React from "react";
import "./App.css";
import PokeList from "./PokeList";

function App() {
  return (
    <div className="root">
      <h1>Pokedex game</h1>
      <h2>Winner!</h2>
      <p>Sum of experience is: </p>
      <PokeList />
      <h2>Loser</h2>
      <p>Sum of experience is: </p>
      <PokeList />
    </div>
  );
}

export default App;
