import React from 'react';
import { IconButton, IIconProps, Image, IStackTokens, SearchBox, Stack } from '@fluentui/react';
import logo from "./medias/logo/full_logo.png";
import { NavLink } from 'react-router-dom';
import "./style/Navigation.css"


const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

//Defines which icon (the double arrows down)
const showNav: IIconProps = { iconName: "DoubleChevronDown8" };
//same for the burger icon
const navIcon: IIconProps = { iconName: "GlobalNavButton" };
const pokeIcon: IIconProps = { iconName: "poke-svg" };
const dictionary: IIconProps = { iconName: "Dictionary" };
const home: IIconProps = { iconName: "Home" };

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

export const Navigation: React.FunctionComponent = () => {
    return (

          <div className="Nav">
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
            
          </div>
    );
  };