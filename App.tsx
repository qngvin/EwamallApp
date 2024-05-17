import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';


import BottomTabNavigation from './src/navigator/BottomTabNavigation';
import LoginScreen from './src/screens/login/LoginScreen';
import SellerHome from './src/screens/seller_screens/SellerHome'
import {InterfaceAccountState} from './src/constant/interface';
import UnAuthNavigator from './src/navigator/UnAuthNavigator';
import AuthNavigator from './src/navigator/AuthNavigator';

const App: React.FC = () => {
  const {isLogin} = useSelector(
    (state: InterfaceAccountState) => state.accountReducer,
  );

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomNav" component={BottomTabNavigation} />
        <Stack.Screen name="Login" component={LoginScreen} />


    
        <Stack.Screen name="SellerHome" component={SellerHome} />
      </Stack.Navigator>

      {!isLogin ? <UnAuthNavigator /> : <AuthNavigator />}

    </NavigationContainer>
  );
};

export default App;
