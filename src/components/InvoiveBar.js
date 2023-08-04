import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import SourceSansRegular from './Fonts/SourceSansRegular';
import SourceSansSemiBold from './Fonts/SourceSansSemiBold';
import SourceSansMedium from './Fonts/SourceSansMedium';

const InvoiveBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <SourceSansRegular style={styles.text}>
          {'Sub Total:'}
        </SourceSansRegular>
        <SourceSansSemiBold style={styles.text}>{'₹120'}</SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansRegular style={styles.text}>
          {'Shipping Fee:'}
        </SourceSansRegular>
        <SourceSansSemiBold style={styles.text}>{'₹0.00'}</SourceSansSemiBold>
      </View>
      <View style={styles.option}>
        <SourceSansRegular style={styles.text}>{'Tax:'}</SourceSansRegular>
        <SourceSansSemiBold style={styles.text}>{'₹0.00'}</SourceSansSemiBold>
      </View>
      <View style={styles.line} />
      <View style={styles.option}>
        <SourceSansMedium style={styles.text}>
          {'Total Amount:'}
        </SourceSansMedium>
        <SourceSansSemiBold style={styles.amount}>{'₹120'}</SourceSansSemiBold>
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

export default memo(InvoiveBar);
