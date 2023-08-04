import React, {memo} from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const SourceSansBold = ({children, style}) => {
  return <Text style={[styles.SourceSansBold, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  SourceSansBold: {
    fontFamily: 'SourceSans3-Bold',
  },
});

export default memo(SourceSansBold);
