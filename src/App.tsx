import React from 'react';
import { Stack, Text, Link, FontWeights } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';


const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};




export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
  groups={[
	{
	  links: [
		{ name: 'Documents', url: 'http://example.com', key: 'key3'},
		{ name: 'Pages', url: 'http://msn.com', key: 'key4' },
		{ name: 'Notebook', url: 'http://msn.com', key: 'key5' },
		{ name: 'Long Name Test for ellipse', url: 'http://msn.com', key: 'key6' },
	  ]
	}
  ]}
  onLinkClick={_onLinkClick}
  //expandedStateText={'expanded'}
  //collapsedStateText={'collapsed'}
  selectedKey={'key3'}
  
/>
    
  );
};

export const NavBar: React.FunctionComponent = () => {
  return (
      <Nav
  groups={[
	{
	  links: [
		{ name: 'All', url: 'http://example.com', key: 'key3'},
    { name: 'Pokemons', url: 'http://msn.com', key: 'key4',
    links: [
      {
        name: 'Sorted by Name',
        url: 'http://msn.com',
        key: 'key1',
        target: '_blank',
      },
      {
        name: 'Sorted by Type',
        url: 'http://msn.com',
        key: 'key2',
        target: '_blank',
      },
    ],
    isExpanded: true,
   },
		{ name: 'Pokeballs', url: 'http://msn.com', key: 'key5' },
		{ name: 'Trainers', url: 'http://msn.com', key: 'key6' },
	  ]
	}
  ]}
  onLinkClick={_onLinkClick}
  //expandedStateText={'expanded'}
  //collapsedStateText={'collapsed'}
  //selectedKey={'key3'}
  
/>

    
    
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="start"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
      <img
        src="../medias/full_logov2.png"
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
