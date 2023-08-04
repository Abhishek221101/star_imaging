import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import FastImage from 'react-native-fast-image';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import CustomButton from './UI/Buttons/CustomButton';
import SourceSansMedium from './Fonts/SourceSansMedium';
import {images} from '../assets/Index';
import SourceSansRegular from './Fonts/SourceSansRegular';
import IconButton from './UI/Buttons/IconButton';
import PrimaryButton from './UI/Buttons/PrimaryButton';

const CartItem = ({text, imageStyle, image}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.leftView}>
          <FastImage source={image} resizeMode="contain" style={imageStyle} />
        </View>
        <View style={styles.rightView}>
          <SourceSansSemiBold style={styles.title}>
            {'Waldent EndoPro with in-built Apex Locator'}
          </SourceSansSemiBold>
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
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.footer}>
        <IconButton
          image={images.minusBlack}
          btnStyle={styles.cartContainer}
          imageStyle={styles.icon}
        />
        <View style={styles.countBox}>
          <SourceSansSemiBold style={styles.title}>{'1'}</SourceSansSemiBold>
        </View>
        <IconButton
          image={images.plusBlack}
          btnStyle={styles.cartContainer}
          imageStyle={styles.icon}
        />
        <PrimaryButton
          title={'Remove'}
          image={images.delete}
          style={styles.btn}
          textStyle={styles.btnText}
          imgStyle={styles.btnImage}
        />
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
    padding: 12,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView: {
    flex: 0.3,
  },
  rightView: {
    flex: 0.7,
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
    height: 32,
    borderRadius: 8,
    flex: 0.5,
    marginLeft: 8,
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
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  countBox: {
    flex: 0.3,
    height: 32,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cartContainer: {
    flex: 0.1,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27A5DA1A',
    borderRadius: 6,
  },
  icon: {
    width: 12,
    height: 12,
  },
  btnImage: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
});

export default memo(CartItem);
