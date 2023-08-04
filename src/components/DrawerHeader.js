import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../assets/Index';
import {colors} from '../themes/colors';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import SourceSansRegular from './Fonts/SourceSansRegular';

const DrawerHeader = ({image, title, text, onPress, style}) => {
  return (
    <LinearGradient
      colors={[colors.blue10, colors.white10]}
      style={styles.linearGradient}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}>
      <View style={[styles.innerContainer, style]}>
        <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
          <FastImage
            source={images.back}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <SourceSansSemiBold style={styles.title}>{title}</SourceSansSemiBold>
          <SourceSansRegular style={styles.text}>{text}</SourceSansRegular>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderBottomColor: colors.blue100,
    borderBottomWidth: 6,
    borderBottomRightRadius: 100,
    borderRightWidth: 1,
    paddingTop: 36,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  header: {
    width: '70%',
    marginHorizontal: 12,
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
  },
  image: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
  },
});

export default memo(DrawerHeader);
