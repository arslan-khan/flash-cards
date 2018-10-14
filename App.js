import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import AppRoot from './src/components/AppRoot';
import { store } from './src/store/store';

const App = () => (
  <Root>
    <Provider store={store}>
      <AppRoot />
    </Provider>
  </Root>
);

export default App;
