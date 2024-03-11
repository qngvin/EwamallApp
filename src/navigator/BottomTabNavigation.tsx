import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';
import {StyleSheet} from 'react-native';
// import {COLORS} from '../constant/theme';
// import {BlurView} from '@react-native-community/blur';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import TabButton from './TabButton';
import Profile from '../screens/profile/Profile';
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
  // icon: {marginTop: 10},
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
    title: 'home',
    screen: 'Home',
    icon: 'home',
    Component: Home,
  },
  {
    id: 2,
    title: 'profile',
    screen: 'Profile',
    icon: 'profile',
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
        {/* <Tab.Screen
          name="Cart"
          component={Home}
          options={{
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'location' : 'location-outline'}
                size={26}
                color={focused ? COLORS.yellowMain : COLORS.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'location' : 'location-outline'}
                size={26}
                color={focused ? COLORS.yellowMain : COLORS.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Voucher"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'location' : 'location-outline'}
                size={26}
                color={focused ? COLORS.yellowMain : COLORS.white}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'location' : 'location-outline'}
                size={26}
                color={focused ? COLORS.yellowMain : COLORS.white}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;
