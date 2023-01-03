import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import ExampleComponent from './ExampleComponent';
import { RetoolConnectedComponent } from 'Retool';

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <RetoolConnectedComponent>
      <ExampleComponent />
    </RetoolConnectedComponent>
  </ThemeProvider>
);

render(<App />, document.body.appendChild(document.createElement('div')));
