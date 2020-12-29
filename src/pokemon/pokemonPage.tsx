import React from 'react';
import { Component } from 'react';
import "../style/pokemonPage.css";


var type:string = "ROCK";




class PokemonDetails extends Component {
    render() {
    
      return (
        <div className="content">
        <div id="content">
          {/*Image resize with window fix*/}
          <img className="sprite" src="https://gitlab.com/pokedex-iut/pokedex-data/-/raw/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/129.png" />
          <section className="top">
            <h1 className="titre">#3630 - Bulbasorus REX</h1>
            <h3>Type : <div className="type" /></h3>
            {/*(S) Si 2 Types*/}
            <h4>Abilities : Deez Nuts</h4>
          </section>
          <section>
            {/*Evo*/}
            <p>Evolutions :</p>
          </section>
          <section>
            {/*Stats*/}
          </section>
        </div>
      </div>
    );
}
}

export default PokemonDetails;