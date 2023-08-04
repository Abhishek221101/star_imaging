import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../../themes/colors';
import CustomInput from '../../components/UI/CustomInput';
import CustomButton from '../../components/UI/Buttons/CustomButton';
import Header from '../../components/UI/Header/Header';

const AirAmbulance = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Air Ambulance'} onPress={navigationHandler} />
      <View style={styles.innerContainer}>
        <CustomInput
          label={'From'}
          placeholder={'Enter City'}
          container={styles.input}
        />
        <CustomInput
          label={'To'}
          placeholder={'Enter Destination'}
          container={styles.input}
        />
        <CustomInput
          label={'Date'}
          placeholder={'Select Date'}
          container={styles.input}
        />
        <CustomInput
          label={'Mobile Number'}
          placeholder={'9265******'}
          container={styles.input}
        />
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
  innerContainer: {
    marginHorizontal: 24,
    marginVertical: 36,
  },
  input: {
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

export default memo(AirAmbulance);
