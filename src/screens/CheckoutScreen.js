import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';

const CheckoutScreen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate();
  }, [navigation]);

  return (
    <View>
      <Text>CheckoutScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(CheckoutScreen);
