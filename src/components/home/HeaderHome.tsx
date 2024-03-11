import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/theme';
import ReusableText from '../../reusables/ReusableText';
import {SafeAreaView} from 'react-native-safe-area-context';

import {View} from 'react-native';
const HeaderHome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <ReusableText
          text="Xin chào, Quang Vinh"
          size={23}
          color={COLORS.white}
          font="Inter-Bold"
        />

        {/* <Icon name="notifications-none" type="entypo" color="white" size={30} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
