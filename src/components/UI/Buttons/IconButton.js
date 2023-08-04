import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';

const IconButton = ({image, onPress, btnStyle, imageStyle}) => {
  return (
    <Pressable style={btnStyle} onPress={onPress}>
      <FastImage source={image} resizeMode="contain" style={imageStyle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default memo(IconButton);
