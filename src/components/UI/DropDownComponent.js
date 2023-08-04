import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import SourceSansRegular from '../Fonts/SourceSansRegular';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/Index';
import {colors} from '../../themes/colors';

// const data = [
//   {label: 'Collection 1', value: '1'},
//   {label: 'Collection 2', value: '2'},
//   {label: 'Collection 3', value: '3'},
//   {label: 'Collection 4', value: '4'},
//   {label: 'Collection 5', value: '5'},
//   {label: 'Collection 6', value: '6'},
//   {label: 'Collection 7', value: '7'},
//   {label: 'Collection 8', value: '8'},
// ];

const DropdownComponent = ({data, search, placeholder, container}) => {
  const [value, setValue] = useState(null);
  const [checked, setChecked] = useState(false);

  // const renderItem = item => {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.textItem}>{item.label}</Text>
  //     </View>
  //   );
  // };

  const renderItem = useCallback(
    item => {
      return (
        <Pressable onPress={() => setChecked(!checked)}>
          <View style={styles.item}>
            <FastImage
              source={checked ? images.emptyCheckbox : images.filledCheckbox}
              style={styles.checkBox}
              resizeMode="contain"
            />
            <SourceSansRegular
              style={[
                styles.textItem,
                {color: checked ? '#27A5DA' : '#4B5563'},
              ]}>
              {item.label}
            </SourceSansRegular>
          </View>
        </Pressable>
      );
    },
    [checked],
  );

  return (
    <Dropdown
      style={container}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={search}
      maxHeight={280}
      labelField="label"
      renderLeftIcon={() => (
        <FastImage
          source={images.sort}
          style={styles.sortIcon}
          resizeMode="contain"
        />
      )}
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey20,
    height: 343,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  dropdown: {
    height: 50,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textItem: {
    flex: 1,
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 12,
    color: '#27A5DA',
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 35,
    width: '75%',
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey20,
    padding: 8,
  },
  search: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: 16,
    color: colors.white,
  },
  button2: {
    width: 64,
    height: 34,
    backgroundColor: colors.black100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  checkBox: {
    width: 12,
    height: 12,
  },
  sortIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 5,
  },
});

export default memo(DropdownComponent);
