import React from 'react';
import { Provider } from 'react-redux';

import AppRoot from './src/components/AppRoot';
import { store } from './src/store/store';

const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

export default App;
