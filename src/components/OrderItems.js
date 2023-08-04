import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import SourceSansMedium from './Fonts/SourceSansMedium';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';

const OrderItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>{'Order Id'}</SourceSansMedium>
        <SourceSansSemiBold style={styles.text}>
          {'CXR2522141794A'}
        </SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>
          {'patient Name'}
        </SourceSansMedium>
        <SourceSansSemiBold style={styles.text}>
          {'Trusha Solanki'}
        </SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>{'Order Type'}</SourceSansMedium>
        <SourceSansSemiBold style={styles.text}>
          {'Home Collection'}
        </SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>
          {'Total Amount'}
        </SourceSansMedium>
        <SourceSansSemiBold style={styles.text}>{'₹160'}</SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>{'Order Date'}</SourceSansMedium>
        <SourceSansSemiBold style={styles.text}>
          {'31-Jul-2023 , 08:30AM'}
        </SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>{'Lab Number'}</SourceSansMedium>
        <SourceSansSemiBold style={styles.text}>{'123456'}</SourceSansSemiBold>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.white20,
    backgroundColor: colors.white100,
    elevation: 1,
    padding: 12,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  text: {
    fontSize: 14,
    color: colors.black,
  },
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
  amount: {
    fontSize: 14,
    color: '#27A5DA',
  },
});

export default memo(OrderItems);
