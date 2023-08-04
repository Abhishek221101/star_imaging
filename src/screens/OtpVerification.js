import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo, useCallback, useRef, useState} from 'react';
import {colors} from '../themes/colors';
import Header from '../components/UI/Header/Header';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';
import SourceSansRegular from '../components/Fonts/SourceSansRegular';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import OTPTextView from 'react-native-otp-textinput';
import OtpTimer from '../components/UI/OtpTimer';
import CustomButton from '../components/UI/Buttons/CustomButton';

const OtpVerification = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const input = useRef(null);
  const [otpInput, setOtpInput] = useState('');

  return (
    <View style={styles.container}>
      <Header
        title={'OTP Verification'}
        text={'Enter the OTP sent to +91-92******66'}
      />
      <View style={styles.innnerContainer}>
        <View style={styles.textView}>
          <SourceSansSemiBold style={styles.title}>
            {'Enter OTP'}
          </SourceSansSemiBold>
          <SourceSansRegular style={styles.text}>
            {'Check your Phone for verified OTP code, and you can continue.'}
          </SourceSansRegular>
          <View style={styles.numComtainer}>
            <SourceSansSemiBold style={styles.number}>
              {'(406) 555-0120'}
            </SourceSansSemiBold>
            <Pressable style={styles.numComtainer}>
              <FastImage
                source={images.edit}
                resizeMode="contain"
                style={styles.editIcon}
              />
              <SourceSansRegular style={styles.editText}>
                {'Edit Number'}
              </SourceSansRegular>
            </Pressable>
          </View>
          <OTPTextView
            ref={input}
            containerStyle={styles.inputContainer}
            tintColor={colors.grey50}
            handleTextChange={setOtpInput}
            inputCount={4}
            keyboardType="numeric"
            textInputStyle={styles.textInput}
          />
          <OtpTimer
            minutes={0}
            seconds={30}
            timerStyle={styles.timer}
            otpViewStyle={styles.otpView}
            resendText={styles.resendOtp}
          />
        </View>
        <CustomButton
          title={'Verify & Proceed'}
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
  innnerContainer: {
    margin: 18,
    paddingVertical: 24,
  },
  textView: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.black,
  },
  btn: {
    height: 40,
    borderRadius: 8,
    marginVertical: 24,
  },
  btnText: {
    fontSize: 16,
  },
  text: {
    marginVertical: 8,
    fontSize: 12,
    color: colors.black50,
    textAlign: 'center',
  },
  numComtainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  number: {
    fontSize: 14,
    color: colors.black,
  },
  editIcon: {
    width: 13,
    height: 13,
    marginHorizontal: 4,
  },
  editText: {
    fontSize: 12,
    color: colors.blue100,
  },
  inputContainer: {
    marginVertical: 30,
  },
  textInput: {
    backgroundColor: colors.grey10,
    borderRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  timer: {
    fontSize: 12,
    color: colors.grey20,
  },
  resendOtp: {
    fontSize: 12,
    color: colors.blue100,
  },
});

export default memo(OtpVerification);
