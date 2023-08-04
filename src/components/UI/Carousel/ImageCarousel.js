import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useCallback, useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {images} from '../../../assets/Index';

const {width, height} = Dimensions.get('window');

const dataList = [
  images.image,
  images.image,
  images.image,
  images.image,
  images.image,
];

const ImageCarousel = () => {
  const [currentindex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const activeImage = useCallback(
    index => {
      setCurrentIndex(index);
      slidesRef?.current?.scrollToOffset({
        offset: index * width,
        animated: true,
      });
    },
    [slidesRef],
  );

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderItem = useCallback(({item}) => {
    return (
      <View style={styles.listContainer}>
        <FastImage
          style={styles.imageList}
          source={item}
          resizeMode="contain"
        />
      </View>
    );
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        keyExtractor={(item, index) => index.toString()}
        ref={slidesRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  listContainer: {
    width: width - 48,
    marginHorizontal: 10,
    height: 200,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageList: {
    width: '100%',
    height: '100%',
  },
});

export default memo(ImageCarousel);
