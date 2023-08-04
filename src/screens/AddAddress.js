import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import CustomButton from '../components/UI/Buttons/CustomButton';
import Header from '../components/UI/Header/Header';
import AddressItems from '../components/AddressItems';

const AddAddress = () => {
  return (
    <View style={styles.container}>
      <Header title={'Add Address'} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <AddressItems />
          <AddressItems />
          <AddressItems />
          <CustomButton
            title={'Add Address'}
            style={styles.btn}
            textStyle={styles.btnText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
  innerContainer: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
  btn: {
    height: 40,
    borderRadius: 8,
    marginVertical: 24,
  },
  btnText: {
    fontSize: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.black,
  },
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  icon: {
    width: 14,
    height: 14,
  },
});

export default memo(AddAddress);
