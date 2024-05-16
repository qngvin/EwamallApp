import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/theme';
const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LogoutScreen</Text>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellowMain,
  },
});
