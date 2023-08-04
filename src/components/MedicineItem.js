import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import FastImage from 'react-native-fast-image';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import CustomButton from './UI/Buttons/CustomButton';
import SourceSansMedium from './Fonts/SourceSansMedium';
import {images} from '../assets/Index';

const MedicineItem = ({text, imageStyle, image, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.leftView}>
        <FastImage source={image} resizeMode="contain" style={imageStyle} />
      </View>
      <View style={styles.rightView}>
        <SourceSansSemiBold style={styles.title}>
          {'Waldent WalCap Amalgam Capsules'}
        </SourceSansSemiBold>
        <View style={styles.footer}>
          <SourceSansSemiBold style={styles.price}>{'₹160'}</SourceSansSemiBold>
          <SourceSansMedium style={styles.prevPrice}>{'₹170'}</SourceSansMedium>
          <SourceSansMedium style={styles.discount}>
            {'(65% OFF)'}
          </SourceSansMedium>
        </View>
        <View style={styles.footer}>
          <View style={styles.cartContainer}>
            <FastImage
              source={images.cart2}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <CustomButton
            title={'Buy Now'}
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
    padding: 12,
    marginHorizontal: 12,
  },
  cartContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#27A5DA',
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 14,
    color: '#212529',
  },
  btn: {
    flex: 1,
    marginLeft: 8,
    height: 36,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 12,
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

export default memo(MedicineItem);
