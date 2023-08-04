import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import ReportItem from '../components/ReportItem';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import Header from '../components/UI/Header/Header';

const RecordScreen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('CreateRecord');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Record Open'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <ReportItem />
        <ReportItem />
        <ReportItem />
      </View>
      <Pressable style={styles.footer} onPress={navigationHandler}>
        <FastImage
          source={images.plusButton}
          resizeMode="contain"
          style={styles.plusIcon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
  innerContainer: {
    margin: 18,
  },
  footer: {
    width: 52,
    height: 52,
    position: 'absolute',
    bottom: 50,
    right: 50,
  },
  plusIcon: {
    width: '100%',
    height: '100%',
  },
});

export default memo(RecordScreen);
