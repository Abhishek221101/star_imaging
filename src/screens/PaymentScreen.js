import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import CustomButton from '../components/UI/Buttons/CustomButton';
import Header from '../components/UI/Header/Header';
import AddressItems from '../components/AddressItems';
import InvoiveBar from '../components/InvoiveBar';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';
import SourceSansMedium from '../components/Fonts/SourceSansMedium';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';

const PaymentScreen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('OrderDetails');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Payment'} onPress={backHandler} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <AddressItems />
          <InvoiveBar />
          <View style={styles.option}>
            <SourceSansMedium style={styles.text}>{'UPI'}</SourceSansMedium>
            <FastImage
              source={images.plusBlack}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.option}>
            <SourceSansMedium style={styles.text}>
              {'Credit/Debit Card'}
            </SourceSansMedium>
            <FastImage
              source={images.plusBlack}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.option}>
            <SourceSansMedium style={styles.text}>
              {'Net Banking'}
            </SourceSansMedium>
            <FastImage
              source={images.plusBlack}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.option}>
            <SourceSansMedium style={styles.text}>{'Wallet'}</SourceSansMedium>
            <FastImage
              source={images.plusBlack}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.option}>
            <SourceSansMedium style={styles.text}>
              {'Cash on Delivery'}
            </SourceSansMedium>
            <FastImage
              source={images.plusBlack}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={styles.line} />
          <CustomButton
            title={'Payment'}
            style={styles.btn}
            textStyle={styles.btnText}
            onPress={navigationHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
  innerContainer: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
  btn: {
    height: 40,
    borderRadius: 8,
    marginVertical: 24,
  },
  btnText: {
    fontSize: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.black,
  },
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  icon: {
    width: 14,
    height: 14,
  },
});

export default memo(PaymentScreen);
