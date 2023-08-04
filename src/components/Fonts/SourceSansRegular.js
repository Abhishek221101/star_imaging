import React, {memo} from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';

const SourceSansRegular = ({children, style}) => {
  return <Text style={[styles.SourceSansRegular, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  SourceSansRegular: {
    fontFamily: 'SourceSans3-Regular',
  },
});

export default memo(SourceSansRegular);
