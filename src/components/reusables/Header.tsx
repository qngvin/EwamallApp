import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant/theme';
interface HeaderProps {
  isHomeScreen: boolean;
}
const Header: React.FC<HeaderProps> = isHomeScreen => {
  const backgroundColor = isHomeScreen ? COLORS.black : COLORS.yellowMain;

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      height: 122,
      width: SIZES.width,
      backgroundColor: backgroundColor,
    },
  });

  return <View style={styles.container}></View>;
};

export default Header;
