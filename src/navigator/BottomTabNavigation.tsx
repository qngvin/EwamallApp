import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Home from '../screens/home/Home';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import TabButton from './TabButton';
import Profile from '../screens/profile/Profile';
import Cart from '../screens/cart/Cart';
import Category from '../screens/categories/Category';
import Voucher from '../screens/voucher/Voucher';
import {useSelector} from 'react-redux';
import {InterfaceAccountState} from '../constant/interface';
import LoginScreen from '../screens/login/LoginScreen';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    // display: 'none',
    borderRadius: 50,
    bottom: 30,
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(73, 67, 50, 0.89)',
    borderRadius: 50,
  },
});
function tabBarBackground() {
  return (
    <BlurView
      blurType="light"
      blurAmount={2}
      style={StyleSheet.absoluteFillObject}>
      <View style={styles.backgroundOverlay} />
    </BlurView>
  );
}
const tabs = [
  {
    id: 1,
    title: 'cart',
    screen: 'Cart',
    icon: 'shopping-cart',
    Component: Cart,
  },
  {
    id: 2,
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
  const {isLogin} = useSelector(
    (state: InterfaceAccountState) => state.accountReducer,
  );

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.container,
          tabBarBackground: tabBarBackground,
        }}>
        {tabs.map(item => (
          <Tab.Screen
            key={item.id}
            name={item.screen}
            component={
              item.screen === 'Home'
                ? item.Component
                // Sửa lại isLogin nếu quên
                : !isLogin
                ? item.Component
                : LoginScreen
            }
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
