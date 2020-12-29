import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Glossary from "./Glossary";
import Home from "./Home";
import { Navigation } from "./Navigation2";
import ListP from "./pokemon/pokemon";
import Pokemons from "./pokemon/pokemon2";
import PokemonDetails from "./pokemon/pokemonPage";


export const App: React.FunctionComponent = () => {
    return (<div>
        <BrowserRouter>
            <Navigation />
        
        <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/pokemon/pokemon" component={ListP} />
              <Route path="/pokemon/pokemon2" component={Pokemons} />
              <Route path="/Glossary" component={Glossary} />
              <Route path="/pokemon/pokemonPage" component={PokemonDetails}/>
            </div>
            </BrowserRouter>
    </div>)
}