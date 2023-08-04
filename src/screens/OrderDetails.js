import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import Header from '../components/UI/Header/Header';
import OrderItems from '../components/OrderItems';
import CustomButton from '../components/UI/Buttons/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';

const OrderDetails = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  // const backHandler = useCallback(() => {
  //   navigation.goBack();
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Order Details'} onPress={navigationHandler} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <OrderItems />
          <OrderItems />
          <OrderItems />
          <CustomButton
            title={'Next'}
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
});

export default memo(OrderDetails);
