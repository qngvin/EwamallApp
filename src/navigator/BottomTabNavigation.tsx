import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';
import {StyleSheet} from 'react-native';
// import {BlurView} from '@react-native-community/blur';

import TabButton from './TabButton';
import Profile from '../screens/profile/Profile';
import Cart from '../screens/cart/Cart';
import Category from '../screens/categories/Category';
import Voucher from '../screens/voucher/Voucher';
const Tab = createBottomTabNavigator();
const tabBarStyle = StyleSheet.create({
  container: {
    borderRadius: 100,
    height: 75,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
// function tabBarBackground() {
//   return (
//     <BlurView
//       blurType="regular"
//       blurAmount={55}
//       style={{
//         borderRadius: 100,
//         backgroundColor: 'transparent',
//       }}
//     />
//   );
// }
const tabs = [
  {
    id: 1,
    title: 'cart',
    screen: 'Cart',
    icon: 'shopping-cart',
    Component: Cart,
  },
  {
    id: 1,
    title: 'categories',
    screen: 'Categories',
    icon: 'grid',
    Component: Category,
  },
  {
    id: 3,
    title: 'home',
    screen: 'Home',
    icon: 'home',
    Component: Home,
  },
  {
    id: 4,
    title: 'voucher',
    screen: 'Voucher',
    icon: 'wallet-outline',
    Component: Voucher,
  },
  {
    id: 5,
    title: 'profile',
    screen: 'Profile',
    icon: 'user',
    Component: Profile,
  },
];
const BottomTabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: tabBarStyle.container,

          // tabBarIconStyle: tabBarStyle.icon,
          // tabBarBackground: tabBarBackground,
        }}>
        {tabs.map(item => (
          <Tab.Screen
            key={item.id}
            name={item.screen}
            component={item.Component}
            options={{
              tabBarButton: props => (
                <TabButton
                  name={item.icon}
                  accessibilityState={props.accessibilityState}
                  onPress={() => {}}
                  {...props}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;
