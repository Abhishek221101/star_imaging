import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/Buttons/CustomButton';
import FastImage from 'react-native-fast-image';
import SourceSansRegular from '../components/Fonts/SourceSansRegular';
import {images} from '../assets/Index';
import Header from '../components/UI/Header/Header';

const CreateRecord = ({navigation}) => {
  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Create Record'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <CustomInput
          label={'Record Name'}
          placeholder={'Enter Record Name'}
          container={styles.input}
        />
        <CustomInput
          label={'Phone Number'}
          placeholder={'Enter Your Phone Number'}
          container={styles.input}
        />
        <View style={styles.uploadContainer}>
          <View style={styles.header}>
            <FastImage
              source={images.uploadIcon}
              resizeMode="contain"
              style={styles.image}
            />
            <SourceSansRegular style={styles.text}>
              {'Upload File (PDF. JPEG)'}
            </SourceSansRegular>
            <CustomButton
              title={'+'}
              style={styles.btnUpload}
              textStyle={styles.uploadBtnText}
            />
          </View>
        </View>
        <CustomButton
          title={'Create Record'}
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={backHandler}
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
  uploadContainer: {
    borderWidth: 1,
    borderColor: colors.greyBorder,
    height: 139,
    borderRadius: 12,
    marginVertical: 8,
    borderStyle: 'dashed',
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    margin: 8,
    fontSize: 12,
    color: colors.grey90,
  },
  btnUpload: {
    height: 32,
    width: 32,
    borderRadius: 4,
  },
  uploadBtnText: {
    fontSize: 24,
  },
});

export default memo(CreateRecord);
