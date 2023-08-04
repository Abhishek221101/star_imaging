import React, {memo} from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const SourceSansMedium = ({children, style}) => {
  return <Text style={[styles.SourceSansMedium, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  SourceSansMedium: {
    fontFamily: 'SourceSans3-Medium',
  },
});

export default memo(SourceSansMedium);
