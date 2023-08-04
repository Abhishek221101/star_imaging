import React, {memo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import SourceSansSemiBold from '../../Fonts/SourceSansSemiBold';
import {colors} from '../../../themes/colors';
import FastImage from 'react-native-fast-image';

const CustomButton = ({style, title, onPress, textStyle, image, imgStyle}) => {
  return (
    <Pressable style={[styles.CustomButton, style]} onPress={onPress}>
      <FastImage source={image} style={imgStyle} resizeMode="contain" />
      <SourceSansSemiBold style={[styles.buttonText, textStyle]}>
        {title}
      </SourceSansSemiBold>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  CustomButton: {
    flexDirection: 'row',
    backgroundColor: '#CB35411A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {color: '#CB3541'},
});

export default memo(CustomButton);
