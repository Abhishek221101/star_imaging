import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import SourceSansRegular from './Fonts/SourceSansRegular';
import SourceSansMedium from './Fonts/SourceSansMedium';

const ReportItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FastImage
          source={images.pdfIcon}
          resizeMode="contain"
          style={styles.image}
        />
        <SourceSansRegular style={styles.text}>
          {'Upload File (PDF. JPEG)'}
        </SourceSansRegular>
      </View>
      <View style={styles.footer}>
        <View>
          <SourceSansMedium style={styles.text2}>
            {'Report Name'}
          </SourceSansMedium>
          <SourceSansRegular style={styles.text3}>
            {'May 11, 2023'}
          </SourceSansRegular>
        </View>
        <FastImage
          source={images.download}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.greyBorder,
    height: 152,
    borderRadius: 12,
    marginVertical: 8,
    // borderStyle: 'dashed',
    // overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    margin: 12,
    fontSize: 12,
    color: colors.black10,
  },
  footer: {
    backgroundColor: colors.grey80,
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  text2: {
    fontSize: 14,
    color: colors.black,
  },
  text3: {
    fontSize: 10,
    color: colors.black10,
  },
});

export default memo(ReportItem);
