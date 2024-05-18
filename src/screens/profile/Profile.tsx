import {
  BackHandler,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {COLORS} from '../../constant/theme';
import HeaderProfile from '../../components/profile/HeaderProfile';
const Profile: React.FC = () => {
  const isSelectionModeEnabled = () => {
    // Replace with actual logic to determine if selection mode is enabled
    return false;
  };

  const disableSelectionMode = () => {
    // Replace with actual logic to disable selection mode
    console.log('Selection mode disabled');
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isSelectionModeEnabled()) {
          disableSelectionMode();
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [isSelectionModeEnabled, disableSelectionMode]),
  );
  const navigation = useNavigation();
  return (
    // <SafeAreaView>
    //   <Text>Profile</Text>
    //   <TouchableOpacity onPress={() => navigation.navigate('SellerHome' as never)}>
    //     <Text>Kênh người bán</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
    <ScrollView style={styles.scrollContainer}>
      <HeaderProfile />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.background_list,
  },
});
export default Profile;
