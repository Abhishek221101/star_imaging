import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import IconHeader from '../components/UI/Header/IconHeader';
import {images} from '../assets/Index';
import MedicineItem from '../components/MedicineItem';
import {TextInput} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import DropDownComponent from '../components/UI/DropDownComponent';

const data = [
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
];

const sort = [
  {label: 'high to low', value: '1'},
  {label: 'low to high', value: '2'},
];

const MedicineScreen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('MyCart');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <IconHeader title={'Medicine'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.leftView}>
            <View style={styles.searchView}>
              <FastImage
                source={images.search}
                resizeMode="contain"
                style={styles.seachIcon}
              />
            </View>
            <TextInput placeholder={'Search Medicine'} style={styles.input} />
          </View>
          <DropDownComponent
            data={sort}
            search={false}
            placeholder={'Sort By'}
            container={styles.dropdown}
          />
        </View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <MedicineItem
              text={item}
              image={images.medicine}
              imageStyle={styles.image}
              onPress={navigationHandler}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
    paddingBottom: 40,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    height: 100,
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    marginHorizontal: 12,
  },
  leftView: {
    flexDirection: 'row',
    flex: 0.6,
  },
  searchView: {
    width: 36,
    height: 36,
    backgroundColor: '#27A5DA',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seachIcon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: 36,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  dropdown: {
    marginLeft: 8,
    flex: 0.4,
    justifyContent: 'flex-end',
    width: 100,
    height: 36,
    backgroundColor: '#27A5DA1A',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default memo(MedicineScreen);
