import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constant/theme';
import ReusableText from '../reusables/ReusableText';
import {SafeAreaView} from 'react-native-safe-area-context';
import Iconions from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import SearchHome from './SearchHome';
import HeightSpacer from '../reusables/HeightSpacer';
import {Badge} from 'react-native-elements';
import BannerAds from '../../components/home/BannerAds';
const HeaderHome: React.FC = () => {
  return (
    <View style={styles.box}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContent}>
          <ReusableText
            text="Xin chào, Quang Vinh"
            size={23}
            color={COLORS.white}
            font={FONTS.inter_bold}
          />

          <Iconions name="notifications-outline" color="white" size={30} />
        </View>
        <HeightSpacer height={30} />
        <View style={styles.headerContent}>
          <SearchHome />
          <View>
            <Iconions
              name="chatbubble-ellipses-outline"
              color="white"
              size={32}
            />
            <Badge
              value={10}
              badgeStyle={{backgroundColor: COLORS.yellowMain, borderWidth: 1}}
              containerStyle={{
                position: 'absolute',
                top: -5,
                right: -5,
              }}
            />
          </View>
        </View>
        <HeightSpacer height={30} />
        <BannerAds />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {backgroundColor: COLORS.transparence, height: 360},
  container: {
    paddingLeft: 20,
    paddingRight: 20,

    height: 280,
    backgroundColor: COLORS.yellowMain,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HeaderHome;
