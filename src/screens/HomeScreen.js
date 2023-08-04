import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import ImageCarousel from '../components/UI/Carousel/ImageCarousel';
import {colors} from '../themes/colors';
import DrawerHeader from '../components/DrawerHeader';
import {FlatList} from 'react-native-gesture-handler';
import ButtonList from '../components/UI/ButtonList';
import {images} from '../assets/Index';

const data = [
  'EMR',
  'Telemedicine',
  'Ambulance',
  'Home Diagnostics',
  'Buy star product',
  'Rent medical equipment',
];

const HomeScreen = ({navigation}) => {
  const navigationHandler = useCallback(
    screen => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <DrawerHeader title={'Welcome user'} text={'Alert tost MSG'} />
      <ScrollView>
        <View style={styles.carousel}>
          <ImageCarousel />
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ButtonList
                text={item}
                image={images.Frame}
                imageStyle={styles.image}
                onPress={() => navigationHandler(item)}
              />
            )}
            numColumns={2}
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
  carousel: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 12,
    marginBottom: 100,
  },
  image: {
    width: 60,
    height: 84,
  },
});

export default memo(HomeScreen);
