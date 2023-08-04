import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import IconHeader from '../components/UI/Header/IconHeader';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';
import {images} from '../assets/Index';
import InvoiveBar from '../components/InvoiveBar';
import CustomButton from '../components/UI/Buttons/CustomButton';
import PaymentScreen from './PaymentScreen';

const data = ['Diagnostic at Home', 'Diagnostic at Home'];

const MyCart = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('OrderDetails');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <IconHeader title={'My Cart'} onPress={backHandler} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <SourceSansSemiBold style={styles.titile}>
            {'2 item(s) in your cart'}
          </SourceSansSemiBold>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <CartItem
                text={item}
                image={images.cartItem}
                imageStyle={styles.image}
              />
            )}
          />
          <InvoiveBar />
          <CustomButton
            title={'Checkout'}
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
  image: {
    width: 90,
    height: 97,
  },
  btn: {
    height: 40,
    borderRadius: 8,
    marginVertical: 24,
  },
  btnText: {
    fontSize: 16,
  },
});

export default memo(MyCart);
