import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";

import { Route, NavLink, HashRouter } from "react-router-dom";

import PokemonDetails from "./pokemonPage";

class Pokemons extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink className="cat" to="/pokemon/pokemonPage">
            <img
              src="https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png"
              className="picturemon"
            />
            <h2>Bulbasaure</h2>
          </NavLink>
        </div>
        <div>
          <NavLink className="cat" to="/pokemon/pokemonPage">
            <img
              src="https://resize-gulli.jnsmedia.fr/r/890,__ym__/img//var/jeunesse/storage/images/gulli/chaine-tv/dessins-animes/pokemon/pokemon/pikachu/26571681-1-fre-FR/Pikachu.jpg"
              className="picturemon"
            />
            <h2>Pikachu</h2>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Pokemons;
