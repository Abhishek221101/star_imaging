import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {colors} from '../themes/colors';
import TeleMedicineItem from '../components/TeleMedicineItem';
import {images} from '../assets/Index';
import Header from '../components/UI/Header/Header';
import CustomButton from '../components/UI/Buttons/CustomButton';

const data = [
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
  'Diagnostic at Home',
];

const Telemedicen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('MyCart');
  }, [navigation]);

  const backHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const [visible, setVisible] = useState(true);

  const toggleHandler = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <View style={styles.container}>
      <Header title={'Telemedicen'} onPress={backHandler} />
      <View style={styles.innerContainer}>
        <View style={styles.btnContainer}>
          <CustomButton
            title={'All'}
            style={[
              styles.btn,
              {backgroundColor: visible ? colors.blue100 : colors.grey60},
            ]}
            textStyle={[
              styles.btnText,
              {color: visible ? colors.white100 : colors.black},
            ]}
            onPress={toggleHandler}
          />
          <CustomButton
            title={'National'}
            style={[
              styles.btn,
              {backgroundColor: !visible ? colors.blue100 : colors.grey60},
            ]}
            textStyle={[
              styles.btnText,
              {color: !visible ? colors.white100 : colors.black},
            ]}
            onPress={toggleHandler}
          />
          <CustomButton
            title={'International'}
            style={[
              styles.btn,
              {backgroundColor: !visible ? colors.blue100 : colors.grey60},
            ]}
            textStyle={[
              styles.btnText,
              {color: !visible ? colors.white100 : colors.black},
            ]}
            onPress={toggleHandler}
          />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TeleMedicineItem
              text={item}
              image={images.telemedicen}
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
    width: 126,
    height: 126,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 12,
  },
  btn: {
    flex: 0.5,
    height: 37,
    borderRadius: 12,
    width: '46%',
    marginHorizontal: 6,
  },
});

export default memo(Telemedicen);
