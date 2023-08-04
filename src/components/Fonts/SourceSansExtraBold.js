import React, {memo} from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const SourceSansExtraBold = ({children, style}) => {
  return <Text style={[styles.SourceSansExtraBold, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  SourceSansExtraBold: {
    fontFamily: 'SourceSans3-ExtraBold',
  },
});

export default memo(SourceSansExtraBold);
