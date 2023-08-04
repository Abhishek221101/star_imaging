import React, {memo} from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const SourceSansSemiBold = ({children, style}) => {
  return <Text style={[styles.SourceSansSemiBold, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  SourceSansSemiBold: {
    fontFamily: 'SourceSans3-SemiBold',
  },
});

export default memo(SourceSansSemiBold);
