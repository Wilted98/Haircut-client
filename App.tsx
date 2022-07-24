import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'urql';
import AuthenticationSwitch from './src/navigation/AuthenticationSwitch';
import {navigationRef} from './src/navigation/RootNavigation';
import {client} from './src/utils/CreateClient';

const App: React.FC = () => {
  return (
    <Provider value={client}>
      <NavigationContainer ref={navigationRef}>
        <AuthenticationSwitch />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
