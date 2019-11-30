import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/navigators/AppNavigator';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
};

export default App;
