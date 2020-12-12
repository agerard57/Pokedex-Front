import React from 'react';
import { Stack, Text, Link, FontWeights } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IStackTokens } from 'office-ui-fabric-react/lib/Stack';
//import full_logov2 from '../medias/logo'


const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

/* eslint-disable react/jsx-no-bind */
export const Search = () => {
  return (
    <Stack styles={{
      root: {
        width: 208,
        margin: '50 0',
        display : 'flex'
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
            key: 'key1',
            target: '_blank',
          },
          {
            name: 'Sorted by type',
            url: 'http://msn.com',
            key: 'key2',
            target: '_blank',
          },
        ],
        isExpanded: true,
      },
      
      {
        name: 'Glossary',
        url: 'http://cnn.com',
        icon: 'News',
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

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="start"
      //verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '-10 auto',
          textAlign: 'center',
          color: '#605e5c',
          display : 'flex'
        }
      }}
      gap={15}
    >
      <img
        src="medias/logo/full-logov2.png"
        alt="Pokedox logo"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Pokedox
      </Text>
      <Text variant="large">For a guide on Pokemons and their mysteries.</Text>
      <Text variant="large" styles={boldStyle}>
        Essential Links
      </Text>
      <Stack horizontal gap={15} horizontalAlign="baseline">
        <Link href="https://developer.microsoft.com/en-us/fabric">All</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Pokemon</Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">Pokeballs</Link>
        <Link href="https://twitter.com/officeuifabric">Trainer</Link>
      </Stack>
      
      
    </Stack>

    
  );
};
