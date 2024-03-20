// HomeScreen.tsx
import React from 'react';
import {ScrollView} from 'react-native';
import HeaderHome from '../../components/home/HeaderHome';
import CategoryHome from '../../components/home/CategoryHome';
import FlashSaleHome from '../../components/home/FlashSaleHome';

const Home: React.FC = () => (
  <ScrollView>
    <HeaderHome />
    <CategoryHome />
    <FlashSaleHome />
  </ScrollView>
);

export default Home;
