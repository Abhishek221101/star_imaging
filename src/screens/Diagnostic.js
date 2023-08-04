import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {colors} from '../themes/colors';
import {FlatList} from 'react-native-gesture-handler';
import DiagnosticItem from '../components/DiagnosticItem';
import {images} from '../assets/Index';
import Header from '../components/UI/Header/Header';

const data = [
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
];

const Diagnostic = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('MyCart');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Home Diagnostics'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <DiagnosticItem
              text={item}
              image={images.home}
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
  },
  innerContainer: {
    marginHorizontal: 18,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default memo(Diagnostic);
