import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import Header from '../components/UI/Header/Header';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import CustomInput from '../components/UI/CustomInput';
import {colors} from '../themes/colors';
import CustomButton from '../components/UI/Buttons/CustomButton';

const LoginScreen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('OtpScreen');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header
        title={'OTP Verification'}
        text={'We Will Send You an One Time Password on this Mobile Number'}
      />
      <View style={styles.imageContainer}>
        <FastImage
          source={images.scientist}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          label={'Mobile Number'}
          placeholder={'Enter Mobile Number'}
        />
        <CustomButton
          title={'GET OTP'}
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={navigationHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
  imageContainer: {
    margin: 18,
  },
  image: {
    width: '100%',
    height: 254,
  },
  inputContainer: {
    margin: 18,
    paddingVertical: 24,
  },
  btn: {
    height: 50,
    borderRadius: 8,
    marginVertical: 24,
  },
  btnText: {
    fontSize: 16,
  },
});

export default memo(LoginScreen);
