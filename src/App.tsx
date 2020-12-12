import React from 'react';
import { Stack } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Image } from '@fluentui/react/lib/Image';
import { initializeIcons } from '@uifabric/icons';
import logo from '../medias/logo/full_logov2.png';
initializeIcons();

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

/* eslint-disable react/jsx-no-bind */
export const Search = () => {
  return (
    <Stack styles={{
      root: {
        width: 208,
        margin: '50 0',
        display : 'flex',
        icon : 'search'
      }
    }} tokens={stackTokens}>
      
      <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
    </Stack>
  );
};

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

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
        url: 'http://example.com',
        key: 'key3',
        target: '_blank',
        links: [
          {
            name: 'Sorted by name',
            url: 'http://msn.com',
            icon: 'HalfAlpha',
            key: 'key1',
            target: '_blank',
          },
          {
            name: 'Sorted by type',
            url: 'http://msn.com',
            icon: 'LightningBolt',
            key: 'key2',
            target: '_blank',
          },
        ],
        isExpanded: true,
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

export const NavBar: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      //selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'Glossary') {
    alert('Glossary link clicked');
  }
}


export const Logo: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="start"
      //verticalFill
      styles={{
        root: {
          width: 208,
          textAlign: 'center',
          color: '#605e5c',
          display : 'flex'
        }
      }}
      gap={15}
    >
      <img
        src="../medias/logo/full_logov2.png"
        alt="Pokedox logo"
      />
      <Image src="../medias/logo/full_logov2.png" />
      
      
      
      
    </Stack>

    
  );
};
