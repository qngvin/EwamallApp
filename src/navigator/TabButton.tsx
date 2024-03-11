import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constant/theme';
interface ButtonProps {
  name: string;
  accessibilityState: any;
  onPress: (event: any) => void;
}
const TabButton: React.FC<ButtonProps> = ({
  name,
  accessibilityState,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Ionicons
          name={name}
          size={26}
          color={accessibilityState.selected ? COLORS.yellowMain : COLORS.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
  },
  button: {
    width: 50,
    height: 50,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
