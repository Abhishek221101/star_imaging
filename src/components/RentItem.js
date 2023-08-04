import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import FastImage from 'react-native-fast-image';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import SourceSansRegular from './Fonts/SourceSansRegular';
import SourceSansMedium from './Fonts/SourceSansMedium';
import CustomButton from './UI/Buttons/CustomButton';

const RentItem = ({text, imageStyle, image, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.leftView}>
          <FastImage source={image} resizeMode="contain" style={imageStyle} />
        </View>
        <View style={styles.rightView}>
          <SourceSansSemiBold style={styles.title}>
            {'Waldent EndoPro with in-built Apex Locator'}
          </SourceSansSemiBold>
          <SourceSansRegular style={styles.text1}>
            {'Amet minim mollit.'}
          </SourceSansRegular>
          <View style={styles.footer}>
            <SourceSansSemiBold style={styles.price}>
              {'₹160'}
            </SourceSansSemiBold>
            <SourceSansMedium style={styles.prevPrice}>
              {'₹170'}
            </SourceSansMedium>
            <SourceSansMedium style={styles.discount}>
              {'(65% OFF)'}
            </SourceSansMedium>
          </View>
          <CustomButton
            title={'Rent Now'}
            style={styles.btn}
            textStyle={styles.btnText}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.white20,
    backgroundColor: colors.white100,
    elevation: 1,
    padding: 6,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
  },
  leftView: {
    flex: 0.4,
  },
  rightView: {
    flex: 0.6,
  },
  title: {
    fontSize: 14,
    color: '#212529',
  },
  text1: {
    fontSize: 12,
    color: colors.grey500,
  },
  textView: {
    flexDirection: 'row',
  },
  image: {
    marginTop: 3,
    marginRight: 4,
    width: 12,
    height: 12,
  },
  btn: {
    height: 33,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: colors.blue65,
  },
  discount: {
    fontSize: 14,
    color: colors.green,
  },
  prevPrice: {
    fontSize: 12,
    color: '#9A9A9A',
    textDecorationLine: 'line-through',
    marginHorizontal: 6,
  },
});

export default memo(RentItem);
