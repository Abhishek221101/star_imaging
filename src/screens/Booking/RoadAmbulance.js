import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../../themes/colors';
import CustomInput from '../../components/UI/CustomInput';
import CustomButton from '../../components/UI/Buttons/CustomButton';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/Index';
import Header from '../../components/UI/Header/Header';

const RoadAmbulance = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Road Ambulance'} onPress={navigationHandler} />
      <View style={styles.innerContainer}>
        <View style={styles.location}>
          <FastImage
            source={images.location}
            resizeMode="contain"
            style={styles.image}
          />
          <View style={styles.locationInput}>
            <CustomInput
              label={'Pic Location'}
              placeholder={'From'}
              container={styles.input}
            />
            <CustomInput
              label={'Drop Location'}
              placeholder={'From'}
              container={styles.input}
            />
          </View>
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
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationInput: {
    width: '90%',
  },
  image: {
    width: 24,
    height: 136,
  },
});

export default memo(RoadAmbulance);
