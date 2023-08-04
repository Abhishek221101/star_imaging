import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import {colors} from '../themes/colors';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';

const DiagnosticItem = ({text, imageStyle, image, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage source={image} resizeMode="contain" style={imageStyle} />
      <SourceSansSemiBold style={styles.text}>{text}</SourceSansSemiBold>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey10,
    backgroundColor: colors.greyBack,
    padding: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    fontSize: 20,
    color: colors.black,
  },
});

export default memo(DiagnosticItem);
