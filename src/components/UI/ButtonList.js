import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../themes/colors';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/Index';
import SourceSansMedium from '../Fonts/SourceSansMedium';

const ButtonList = ({text, imageStyle, image, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage source={image} resizeMode="contain" style={imageStyle} />
      <SourceSansMedium style={styles.text}>{text}</SourceSansMedium>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey10,
    backgroundColor: colors.grey30,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  text: {
    fontSize: 14,
    color: colors.black,
  },
});

export default memo(ButtonList);
