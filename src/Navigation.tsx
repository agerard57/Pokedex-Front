import React from 'react';
import { DefaultButton, IconButton, IIconProps, Stack } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Image } from '@fluentui/react/lib/Image';
import { initializeIcons } from '@uifabric/icons';
import logo from './medias/logo/full_logo_smol.png';
import pokeballIcon from './medias/icons/Pokeball.js';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';

initializeIcons(); //Pour pouvoir utiliser les icones



// Use the registerIcons api from the styling package to register custom svg icons so that they
// can be used by the Icon component (or in anything that renders Icons, like Buttons).
registerIcons({
  icons: {
    'poke-svg': (
      <svg width="24pt" height="24pt" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1">
<g id="surface1">
<path  d="M 23.601562 12 C 23.601562 5.59375 18.40625 0.398438 12 0.398438 C 5.59375 0.398438 0.398438 5.59375 0.398438 12 Z M 23.601562 12 " fill="#94c1ff"/>
<path  d="M 24 12.398438 L 0 12.398438 L 0 12 C 0 5.382812 5.382812 0 12 0 C 18.617188 0 24 5.382812 24 12 Z M 0.808594 11.601562 L 23.191406 11.601562 C 22.980469 5.609375 18.042969 0.800781 12 0.800781 C 5.957031 0.800781 1.019531 5.609375 0.808594 11.601562 Z M 0.808594 11.601562 " fill="#0e65e5"/>
<path  d="M 23.601562 12 C 23.601562 18.40625 18.40625 23.601562 12 23.601562 C 5.59375 23.601562 0.398438 18.40625 0.398438 12 Z M 23.601562 12 " fill="#fff"/>
<path  d="M 12 24 C 5.382812 24 0 18.617188 0 12 C 0 11.777344 0.179688 11.601562 0.398438 11.601562 L 23.601562 11.601562 C 23.820312 11.601562 24 11.777344 24 12 C 24 18.617188 18.617188 24 12 24 Z M 0.808594 12.398438 C 1.019531 18.390625 5.957031 23.199219 12 23.199219 C 18.042969 23.199219 22.980469 18.390625 23.191406 12.398438 Z M 0.808594 12.398438 " fill="#0e65e5"/>
<path  d="M 12 21.199219 C 6.417969 21.199219 1.753906 17.253906 0.648438 12 L 0.398438 12 C 0.398438 18.40625 5.59375 23.601562 12 23.601562 C 18.40625 23.601562 23.601562 18.40625 23.601562 12 L 23.351562 12 C 22.242188 17.253906 17.582031 21.199219 12 21.199219 Z M 12 21.199219 "fill="#0e65e5"/>
<path  d="M 12 24 C 5.382812 24 0 18.617188 0 12 C 0 11.777344 0.179688 11.601562 0.398438 11.601562 L 0.648438 11.601562 C 0.839844 11.601562 1.003906 11.734375 1.042969 11.917969 C 2.125 17.066406 6.734375 20.800781 12 20.800781 C 17.265625 20.800781 21.875 17.066406 22.957031 11.917969 C 22.996094 11.734375 23.160156 11.601562 23.351562 11.601562 L 23.601562 11.601562 C 23.820312 11.601562 24 11.777344 24 12 C 24 18.617188 18.617188 24 12 24 Z M 1.117188 14.660156 C 2.316406 19.554688 6.738281 23.199219 12 23.199219 C 17.261719 23.199219 21.683594 19.554688 22.882812 14.660156 C 20.945312 18.800781 16.71875 21.601562 12 21.601562 C 7.28125 21.601562 3.054688 18.800781 1.117188 14.660156 Z M 1.117188 14.660156 " fill="#0e65e5"/>
<path  d="M 16.398438 12 C 16.398438 14.429688 14.429688 16.398438 12 16.398438 C 9.570312 16.398438 7.601562 14.429688 7.601562 12 C 7.601562 9.570312 9.570312 7.601562 12 7.601562 C 14.429688 7.601562 16.398438 9.570312 16.398438 12 Z M 16.398438 12 "fill="#5c9eff"/>
<path  d="M 12 16.800781 C 9.351562 16.800781 7.199219 14.648438 7.199219 12 C 7.199219 9.351562 9.351562 7.199219 12 7.199219 C 14.648438 7.199219 16.800781 9.351562 16.800781 12 C 16.800781 14.648438 14.648438 16.800781 12 16.800781 Z M 12 8 C 9.792969 8 8 9.792969 8 12 C 8 14.207031 9.792969 16 12 16 C 14.207031 16 16 14.207031 16 12 C 16 9.792969 14.207031 8 12 8 Z M 12 8 "fill="#0e65e5"/>
<path  d="M 14.800781 12 C 14.800781 13.546875 13.546875 14.800781 12 14.800781 C 10.453125 14.800781 9.199219 13.546875 9.199219 12 C 9.199219 10.453125 10.453125 9.199219 12 9.199219 C 13.546875 9.199219 14.800781 10.453125 14.800781 12 Z M 14.800781 12 " fill="#fff"/>
<path  d="M 12 15.199219 C 10.234375 15.199219 8.800781 13.765625 8.800781 12 C 8.800781 10.234375 10.234375 8.800781 12 8.800781 C 13.765625 8.800781 15.199219 10.234375 15.199219 12 C 15.199219 13.765625 13.765625 15.199219 12 15.199219 Z M 12 9.601562 C 10.675781 9.601562 9.601562 10.675781 9.601562 12 C 9.601562 13.324219 10.675781 14.398438 12 14.398438 C 13.324219 14.398438 14.398438 13.324219 14.398438 12 C 14.398438 10.675781 13.324219 9.601562 12 9.601562 Z M 12 9.601562 " fill="#0e65e5"/>
<path  d="M 3.699219 8.429688 C 3.640625 8.429688 3.582031 8.417969 3.527344 8.390625 C 3.328125 8.292969 3.242188 8.054688 3.339844 7.855469 C 4.230469 5.992188 5.730469 4.441406 7.566406 3.484375 C 7.761719 3.382812 8.003906 3.457031 8.105469 3.652344 C 8.207031 3.847656 8.128906 4.089844 7.933594 4.191406 C 6.253906 5.070312 4.878906 6.492188 4.058594 8.203125 C 3.992188 8.34375 3.847656 8.429688 3.699219 8.429688 Z M 3.699219 8.429688 " fill="#fff"/>
<path  d="M 19.199219 10.800781 C 18.980469 10.800781 18.800781 10.621094 18.800781 10.398438 L 18.800781 8.800781 C 18.800781 8.578125 18.980469 8.398438 19.199219 8.398438 C 19.421875 8.398438 19.601562 8.578125 19.601562 8.800781 L 19.601562 10.398438 C 19.601562 10.621094 19.421875 10.800781 19.199219 10.800781 Z M 19.199219 10.800781 " fill="#fff"/>
<path  d="M 20 10 L 18.398438 10 C 18.179688 10 18 9.820312 18 9.601562 C 18 9.378906 18.179688 9.199219 18.398438 9.199219 L 20 9.199219 C 20.222656 9.199219 20.398438 9.378906 20.398438 9.601562 C 20.398438 9.820312 20.222656 10 20 10 Z M 20 10 " fill="#fff"/>
<path  d="M 8.398438 21.601562 C 8.179688 21.601562 8 21.421875 8 21.199219 L 8 19.601562 C 8 19.378906 8.179688 19.199219 8.398438 19.199219 C 8.621094 19.199219 8.800781 19.378906 8.800781 19.601562 L 8.800781 21.199219 C 8.800781 21.421875 8.621094 21.601562 8.398438 21.601562 Z M 8.398438 21.601562 " fill="#fff"/>
<path  d="M 9.199219 20.800781 L 7.601562 20.800781 C 7.378906 20.800781 7.199219 20.621094 7.199219 20.398438 C 7.199219 20.179688 7.378906 20 7.601562 20 L 9.199219 20 C 9.421875 20 9.601562 20.179688 9.601562 20.398438 C 9.601562 20.621094 9.421875 20.800781 9.199219 20.800781 Z M 9.199219 20.800781 " fill="#fff"/>
</g>
</svg>
    ),
  },
});


  

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

//Beginning : is icon button clicked ?
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
//Defines which icon (the double arrows down)
const showNav: IIconProps = { iconName: 'DoubleChevronDown8'};
//same for the burger icon
const navIcon: IIconProps = { iconName: 'GlobalNavButton' };

//Code for the search bar
export const Search = () => {
  return (
    <Stack styles={{
      root: {
        width: 208,
        icon : 'search'
      }
    }} tokens={stackTokens}>
      
      <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
      <IconButton id="show" iconProps={showNav} title="ShowMore"  />
    </Stack>
  );
};

//Style of the navbar
const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

//Buttons in navbar
const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'All',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
      },
      {
        name: 'Pokemon',
        url: 'http://localhost:3000/full_logov2.png',
        icon: 'poke-svg',
        key: 'key3',
        target: '_blank',
      },
      
      {
        name: 'Glossary',
        url: 'http://cnn.com',
        icon: 'Dictionary',
        key: 'key7',
        target: '_blank',
      },
    ],
  },
];

//Code for nav bar
export const NavBar: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={Header}
      //selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

//One example of function onclick
function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'Glossary') {
    alert('Glossary link clicked');
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
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
      
      <Image src={logo} />

      <IconButton iconProps={navIcon} title="NavBarButton" />
      
      
    </Stack>

    
  );
};

console.log(logo);
function Header(){
  return <img src={logo}></img>;
}

function _alertClicked(): void {
  alert('Clicked');
}