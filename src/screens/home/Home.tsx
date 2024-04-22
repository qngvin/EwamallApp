// HomeScreen.tsx
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import HeaderHome from '../../components/home/HeaderHome';
import CategoryHome from '../../components/home/CategoryHome';
import FlashSaleHome from '../../components/home/FlashSaleHome';
import {COLORS} from '../../constant/theme';

const Home: React.FC = () => (
  <ScrollView style={styles.container}>
    <HeaderHome />
    <CategoryHome />
    <FlashSaleHome />
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
});
export default Home;
