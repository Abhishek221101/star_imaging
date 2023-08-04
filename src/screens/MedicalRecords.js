import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useRef, useState} from 'react';
import {colors} from '../themes/colors';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';
import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/Buttons/CustomButton';
import OtpTimer from '../components/UI/OtpTimer';
import OTPTextView from 'react-native-otp-textinput';
import Header from '../components/UI/Header/Header';

const MedicalRecords = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('RecordList');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const input = useRef(null);
  const [otpInput, setOtpInput] = useState('');

  return (
    <View style={styles.container}>
      <Header title={'Medical Records'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <SourceSansSemiBold style={styles.header}>
          {'Please verified mobile number'}
        </SourceSansSemiBold>
        <View style={styles.inputContainer}>
          <CustomInput
            label={'Mobile Number'}
            placeholder={'Enter Mobile Number'}
            container={styles.input}
          />
          <CustomButton
            title={'Verified'}
            style={styles.verifyBtn}
            textStyle={styles.verifyText}
          />
        </View>
        <View style={styles.textView}>
          <SourceSansSemiBold style={styles.title}>
            {'Enter OTP'}
          </SourceSansSemiBold>
          <OTPTextView
            ref={input}
            containerStyle={styles.otpInput}
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
          title={'SUBMIT'}
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
  innerContainer: {
    margin: 18,
  },
  header: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
  },
  input: {
    width: '70%',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 24,
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  verifyBtn: {
    height: 40,
    width: 100,
    backgroundColor: colors.blue20,
  },
  verifyText: {
    fontSize: 12,
    color: colors.blue100,
  },
  btn: {
    height: 39,
    borderRadius: 8,
    marginVertical: 24,
  },
  btnText: {
    fontSize: 16,
  },
  textView: {
    alignItems: 'center',
  },
  otpInput: {
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

export default memo(MedicalRecords);
