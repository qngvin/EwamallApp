import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const COLORS = {
  white: '#ffffff',
  blue: '#00A9FF',
  red: '#FF1E1E',
  yellow: '#FFC436',
  black: '#000000',
  gray: 'gray',
  yellowMain: '#E9BB45',
};
const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
  width,
  height,
};
const FONTS = {
  // small: {
  //   fontFamily: '',
  //   fontSize: SIZES.small,
  //   fontWeight: '400',
  // },
  // medium: {
  //   fontFamily: '',
  //   fontSize: SIZES.medium,
  //   fontWeight: '600',
  // },
  // large: {
  //   fontFamily: '',
  //   fontSize: SIZES.large,
  //   fontWeight: '700',
  // },
  // xLarge: {
  //   fontFamily: '',
  //   fontSize: SIZES.xLarge,
  //   fontWeight: '800',
  // },
};

export {COLORS, SIZES, FONTS};
