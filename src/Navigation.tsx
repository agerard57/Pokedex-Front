import React, { Fragment } from "react";
import { DefaultButton, IconButton, IIconProps, Stack } from "@fluentui/react";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react/lib/Nav";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { IStackTokens } from "office-ui-fabric-react/lib/Stack";
import { Image } from "@fluentui/react/lib/Image";
import { initializeIcons } from "@uifabric/icons";
import logo from "./medias/logo/full_logo.png";

import pokeballIcon from "./medias/icons/Pokeball.js";
import { registerIcons } from "office-ui-fabric-react/lib/Styling";
import "./style/Navigation.css";

import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import ListP from "./pokemon/pokemon";
import Glossary from "./Glossary";
import Pokemons from "./pokemon/pokemon2";
import PokemonDetails from "./pokemon/pokemonPage";



const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

//Beginning : is icon button clicked ?
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
//Defines which icon (the double arrows down)
const showNav: IIconProps = { iconName: "DoubleChevronDown8" };
//same for the burger icon
const navIcon: IIconProps = { iconName: "GlobalNavButton" };
const pokeIcon: IIconProps = { iconName: "poke-svg" };
const dictionary: IIconProps = { iconName: "Dictionary" };
const home: IIconProps = { iconName: "Home" };

export const Nav2: React.FunctionComponent = () => {
  return (
    <Fragment>
      <HashRouter>
        <div>
          <div className="sidenav">
            <img alt="logo" style={{ width: 208 }} src={String(logo)} />
            <div>
              <Stack
                styles={{
                  root: {
                    width: 208,
                    icon: "search",
                  },
                }}
                tokens={stackTokens}
              >
                <SearchBox
                  placeholder="Search"
                  onSearch={(newValue) => console.log("value is " + newValue)}
                />
                <IconButton
                  id="show"
                  className="show"
                  iconProps={showNav}
                  title="ShowMore"
                />
              </Stack>
            </div>
            <ul className="header">
              <br />
              <li>
                <IconButton
                  id="pokeb"
                  className="pokeb"
                  iconProps={home}
                  title="Pokeball"
                />
                <NavLink className="cat" to="/">
                  Home
                </NavLink>
              </li>
              <br /> //TODO remove br and increase padding
              <li>
                <IconButton
                  id="pokeb"
                  className="pokeb"
                  iconProps={pokeIcon}
                  title="Pokeball"
                />
                <NavLink to="/pokemon/pokemon">Pokemon</NavLink>
              </li>
              <br />
              <li>
                <IconButton
                  id="pokeb"
                  className="pokeb"
                  iconProps={pokeIcon}
                  title="Items"
                />
                <NavLink to="/pokemon/pokemon2">Items</NavLink>
              </li>
              <br />
              <li>
                <IconButton
                  id="pokeb"
                  className="pokeb"
                  iconProps={pokeIcon}
                  title="Moves"
                />
                <NavLink to="/pokemon/pokemon">Moves</NavLink>
              </li>
              <br />
              <li>
                <IconButton
                  id="dico"
                  className="dico"
                  iconProps={dictionary}
                  title="Glossary"
                />
                <NavLink to="/Glossary">Glossary</NavLink>
              </li>
              <br />
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/pokemon/pokemon" component={ListP} />
            <Route path="/pokemon/pokemon2" component={Pokemons} />
            <Route path="/Glossary" component={Glossary} />
            <Route path="/pokemon/pokemonPage" component={PokemonDetails}/>
          </div>
        </div>
      </HashRouter>
    </Fragment>
  );
};

//One example of function onclick
function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "Glossary") {
    alert("Glossary link clicked");
  }
}

// code for the logo + burger icon
export const Logo = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="start"
      //verticalFill
      styles={{
        root: {
          width: 208,
          textAlign: "center",
          color: "#605e5c",
        },
      }}
      gap={15}
    >
      <Image src={logo} />
      <IconButton className="icon" iconProps={navIcon} title="NavBarButton" />
    </Stack>
  );
};

console.log(logo);
function Header(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "Glossary") {
    return (
      <HashRouter>
        <div>
          <NavLink to="/pokemon/handler">Hanfler</NavLink>
        </div>
      </HashRouter>
    );
  }
}

function _alertClicked(): void {
  alert("Clicked");
}
