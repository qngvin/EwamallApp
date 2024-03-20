import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {banner} from '../../data/Banner';

const {width: screenWidth} = Dimensions.get('window');

const BannerAds: React.FC = () => {
  const renderItem = ({item}: {item: {imgUrl: string}}) => (
    <Image source={{uri: item.imgUrl}} style={styles.image} />
  );

  return (
    <View>
      <Carousel
        data={banner}
        renderItem={renderItem}
        sliderWidth={screenWidth - 40}
        itemWidth={screenWidth - 40}
        autoplay={true}
        autoplayInterval={2500}
        loop={true}
      />
    </View>
  );
};

export default BannerAds;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 170,
    borderRadius: 25,
  },
});
