import React, {useCallback} from 'react';
import Header from '../../components/seller_componets/reusables/Header';
import {
  AppState,
  BackHandler,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const SellerHome = () => {
  const handleAppStateChange = (nextAppState: any) => {
    console.log('AppState changed to', nextAppState);
    // Perform actions based on the new app state
    if (nextAppState === 'active') {
      // App has come to the foreground
    } else if (nextAppState === 'background') {
      // App has gone to the background
    }
  };

  useFocusEffect(
    useCallback(() => {
      // Add the event listener when the screen is focused
      const subscription = AppState.addEventListener(
        'change',
        handleAppStateChange,
      );

      // Cleanup function to remove the event listener when the screen is unfocused
      return () => {
        subscription.remove();
      };
    }, []),
  );

  const navigation = useNavigation();

  return (
    <ScrollView style={{marginHorizontal: 15}}>
      <SafeAreaView>
        <Header title="Title of Header" />
        <View>
          <View>
            <Text>fsadfasdfsd</Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.header}>
        <View>
          <Image
            source={{
              uri: 'https://play-lh.googleusercontent.com/l_Lm4yidvp_sfTkoDRdkF0lODJu72jkP4RfPqfPBlrk2X7b2qb0q88BUwt_7QzKSaLY',
            }}
            style={styles.image}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>NhatRauXanh</Text>
        <Button
          title="Xem shop"
          onPress={() => navigation.navigate('Shop' as never)}
        />
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text> Đơn hàng</Text>
        <TouchableOpacity>
          <Text>Xem lịch sử đơn hàng</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text> Đơn hàng</Text>
          <TouchableOpacity>
            <Text>Xem lịch sử đơn hàng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.oderStatus}>
          <TouchableOpacity>
            <Text style={{justifyContent: 'center'}}>1</Text>
            <Text>Chờ lấy hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>1</Text>
            <Text>Đơn hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>1</Text>
            <Text>Trả hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>1</Text>
            <Text>Chờ lấy hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View>
                <TouchableOpacity>
                    <Ionicons
                        name={"product-hunt"}
                        size={26}
                    />
                    <Text>
                        Sản phẩm của tôi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name={"product-hunt"}
                        size={26}
                    />
                    <Text>
                        Sản phẩm của tôi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name={"product-hunt"}
                        size={26}
                    />
                    <Text>
                        Sản phẩm của tôi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name={"product-hunt"}
                        size={26}
                    />
                    <Text>
                        Sản phẩm của tôi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name={"product-hunt"}
                        size={26}
                    />
                    <Text>
                        Sản phẩm của tôi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name={"product-hunt"}
                        size={26}
                    />
                    <Text>
                        Sản phẩm của tôi
                    </Text>
                </TouchableOpacity>
            </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {},
  image: {
    width: 40,
    height: 40,
  },
  oderStatus: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SellerHome;
