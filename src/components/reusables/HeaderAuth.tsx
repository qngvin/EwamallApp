import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../constant/theme';

const HeaderAuth: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: '/assets/images/LogoHUHU.png'}} />
      </View>
      <View style={styles.content}></View>
    </View>
  );
};

export default HeaderAuth;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: SIZES.width,
    backgroundColor: 'red',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
  },
  content: {
    flex: 2,
  },
});
