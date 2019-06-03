import React, { Component } from "react";
import PokeCard from "./PokeCard";

function ranPic() {
  const random = Math.floor(Math.random() * 99 + 1);
  if (random < 10) {
    return `00${random}`;
  } else if (random < 100) {
    return `0${random}`;
  }
}

function ranPok() {
  return Math.floor(Math.random() * 7 + 1);
}

class PokeList extends Component {
  render() {
    return (
      <div className="mainList">
        <div className="list">
          <PokeCard img={ranPic()} queue={ranPok()} />
          <PokeCard img={ranPic()} queue={ranPok()} />
          <PokeCard img={ranPic()} queue={ranPok()} />
          <PokeCard img={ranPic()} queue={ranPok()} />
        </div>
        <div className="list">
          <PokeCard img={ranPic()} queue={ranPok()} />
          <PokeCard img={ranPic()} queue={ranPok()} />
          <PokeCard img={ranPic()} queue={ranPok()} />
          <PokeCard img={ranPic()} queue={ranPok()} />
        </div>
      </div>
    );
  }
}

export default PokeList;
