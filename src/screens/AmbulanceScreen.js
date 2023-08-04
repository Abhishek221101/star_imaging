import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import ImageCarousel from '../components/UI/Carousel/ImageCarousel';
import {colors} from '../themes/colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ButtonList from '../components/UI/ButtonList';
import {images} from '../assets/Index';
import CustomButton from '../components/UI/Buttons/CustomButton';
import Header from '../components/UI/Header/Header';

const dataAir = [
  'EC145 helicopter',
  'EC145 helicopter',
  'EC145 helicopter',
  'EC145 helicopter',
  'EC145 helicopter',
  'EC145 helicopter',
];

const dataRoad = [
  ' Ambulance Service',
  ' Ambulance Service',
  ' Ambulance Service',
  ' Ambulance Service',
  ' Ambulance Service',
  ' Ambulance Service',
];

const AmbulanceScreen = ({navigation}) => {
  const [visible, setVisible] = useState(true);

  const navigationHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const screenNav = useCallback(
    screen => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  const toggleHandler = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.view}>
        <Header title={'Select Ambulance'} onPress={navigationHandler} />
        <View style={styles.carousel}>
          <ImageCarousel />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.btnContainer}>
            <CustomButton
              title={'Air Ambulance'}
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
              title={'Road Ambulance'}
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
          {visible ? (
            <FlatList
              data={dataAir}
              renderItem={({item}) => (
                <ButtonList
                  text={item}
                  image={images.Road}
                  imageStyle={styles.image}
                  onPress={() => screenNav('AirAmbulance')}
                />
              )}
              numColumns={2}
            />
          ) : (
            <FlatList
              data={dataRoad}
              renderItem={({item}) => (
                <ButtonList
                  text={item}
                  image={images.Air}
                  imageStyle={styles.image}
                  onPress={() => screenNav('RodeAmbulance')}
                />
              )}
              numColumns={2}
            />
          )}
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
  carousel: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
  innerContainer: {
    marginHorizontal: 12,
  },
  image: {
    width: 137,
    height: 107,
    marginBottom: 8,
  },
  view: {
    marginBottom: 30,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: 6,
  },
  btn: {
    height: 37,
    borderRadius: 12,
    width: '46%',
    marginHorizontal: 6,
  },
});

export default memo(AmbulanceScreen);
