import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import {colors} from '../themes/colors';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import SourceSansRegular from './Fonts/SourceSansRegular';
import {images} from '../assets/Index';
import SourceSansMedium from './Fonts/SourceSansMedium';
import CustomButton from './UI/Buttons/CustomButton';

const TeleMedicineItem = ({text, imageStyle, image, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.leftView}>
          <FastImage source={image} resizeMode="contain" style={imageStyle} />
        </View>
        <View style={styles.rightView}>
          <SourceSansSemiBold style={styles.title}>
            {'Dr. Satish k. vora'}
          </SourceSansSemiBold>
          <SourceSansRegular style={styles.text1}>
            {'Senior Consultant, Pathologist'}
          </SourceSansRegular>
          <SourceSansRegular style={styles.text2}>
            {'Department :- Dental'}
          </SourceSansRegular>
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
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.leftView}>
          <View style={styles.footer}>
            <SourceSansSemiBold style={styles.price}>
              {'$160'}
            </SourceSansSemiBold>
            <SourceSansMedium style={styles.discount}>
              {'(65% OFF)'}
            </SourceSansMedium>
          </View>
        </View>
        <View style={styles.rightView}>
          <CustomButton
            title={'Book'}
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
  image: {
    marginTop: 3,
    marginRight: 4,
    width: 12,
    height: 12,
  },
  btn: {
    height: 33,
    width: 180,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    color: colors.blue65,
  },
  discount: {
    fontSize: 12,
    color: colors.green,
  },
});

export default memo(TeleMedicineItem);
