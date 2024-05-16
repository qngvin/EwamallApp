import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import {InterfaceAccountState} from './src/constant/interface';

import UnAuthNavigator from './src/navigator/UnAuthNavigator';
import AuthNavigator from './src/navigator/AuthNavigator';

const App: React.FC = () => {
  const {isLogin} = useSelector(
    (state: InterfaceAccountState) => state.accountReducer,
  );

  return (
    <NavigationContainer>
      {!isLogin ? <UnAuthNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
