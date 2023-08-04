import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import TeleMedicineItem from '../components/TeleMedicineItem';
import {images} from '../assets/Index';
import RentItem from '../components/RentItem';
import Header from '../components/UI/Header/Header';

const data = [
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
];

const RentEquipment = ({navigation}) => {
  const navigationHandler = useCallback(
    screen => {
      navigation.navigate('MyCart');
    },
    [navigation],
  );

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Rent Medical Equipment'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <RentItem
              text={item}
              image={images.rentItem}
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
    marginHorizontal: 18,
    marginBottom: 100,
  },
  image: {
    width: 118,
    height: 126,
  },
});

export default memo(RentEquipment);
