import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import BottomTabNavigation from './src/navigator/BottomTabNavigation';
import LoginScreen from './src/screens/login/LoginScreen';
import SellerHome from './src/screens/seller_screens/SellerHome'
import {InterfaceAccountState} from './src/constant/interface';

const Stack = createNativeStackNavigator();

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


        {/* Seller */}
        <Stack.Screen name="SellerHome" component={SellerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
