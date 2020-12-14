import React from 'react';
import { DefaultButton, IconButton, IIconProps, Stack } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Image } from '@fluentui/react/lib/Image';
import { initializeIcons } from '@uifabric/icons';
import logo from './medias/logo/full_logo_smol.png';
initializeIcons(); //Pour pouvoir utiliser les icones



const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

//Beginning : is icon button clicked ?
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
//DDefines wich icon (the double arrows down)
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
        name: 'Pokemons',
        url: 'http://localhost:3000/full_logov2.png',
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