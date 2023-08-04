import React, {memo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import SourceSansSemiBold from '../../Fonts/SourceSansSemiBold';
import {colors} from '../../../themes/colors';

const CustomButton = ({style, title, onPress, textStyle}) => {
  return (
    <Pressable style={[styles.CustomButton, style]} onPress={onPress}>
      <SourceSansSemiBold style={[styles.buttonText, textStyle]}>
        {title}
      </SourceSansSemiBold>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  CustomButton: {
    backgroundColor: colors.blue100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {color: colors.white100},
});

export default memo(CustomButton);
