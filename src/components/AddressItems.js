import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import {colors} from '../themes/colors';
import IconButton from './UI/Buttons/IconButton';
import SourceSansRegular from './Fonts/SourceSansRegular';

const AddressItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <SourceSansSemiBold style={styles.title}>
          {'Home Delivery'}
        </SourceSansSemiBold>
        <View style={styles.imageContainer}>
          <IconButton
            image={images.delete}
            btnStyle={[styles.iconView, {backgroundColor: '#CB35411A'}]}
            imageStyle={styles.image}
          />
          <IconButton
            image={images.edit}
            btnStyle={[styles.iconView, {backgroundColor: '#27A5DA1A'}]}
            imageStyle={styles.image}
          />
        </View>
      </View>
      <View style={styles.rightView}>
        <SourceSansSemiBold style={styles.text}>
          {'Trusha Solanki'}
        </SourceSansSemiBold>
        <View style={styles.textView}>
          <FastImage
            source={images.locIcon}
            resizeMode="contain"
            style={styles.image}
          />
          <SourceSansRegular style={styles.text2}>
            {'2972 Westheimer Rd. Santa Ana, Illinois 85486 '}
          </SourceSansRegular>
        </View>
        <SourceSansRegular style={styles.text2}>
          {'Phone : 9265******'}
        </SourceSansRegular>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.white20,
    backgroundColor: colors.white100,
    elevation: 1,
    padding: 12,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  iconView: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 4,
  },
  image: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: 14,
    color: colors.black,
  },
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  amount: {
    fontSize: 14,
    color: '#27A5DA',
  },
  rightView: {
    flex: 0.6,
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  text1: {
    fontSize: 10,
    color: colors.grey500,
  },
  text2: {
    fontSize: 12,
    color: colors.black65,
  },
  textView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

export default memo(AddressItems);
