import React, { Component } from "react";
import pokemons from "./pokemons";
const pokeApi = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class PokeCard extends Component {
  render() {
    const { img, queue } = this.props;
    return (
      <div className="pokemon">
        <p>Name: {pokemons[queue].name}</p>
        <p>Type: {pokemons[queue].type}</p>
        <img alt="pokemon" src={`${pokeApi}${img}.png`} />
        <p className="baseline">
          Experience: {pokemons[queue].base_experience}
        </p>
      </div>
    );
  }
}

export default PokeCard;
