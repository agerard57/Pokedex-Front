import * as React from 'react';
import ReactDOM from 'react-dom';
import { Logo } from '../Navigation';
import { PokeList } from './pokemon';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer, mergeStyles } from '@fluentui/react';
import * as serviceWorker from '../serviceWorker';
import '../style/Navigation.css';


// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(
  <Customizer {...FluentCustomizations}>
    <Logo />
    
    <PokeList />
    
    
  </Customizer>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();