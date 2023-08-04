import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../themes/colors';
import CustomInput from '../components/UI/CustomInput';
import CustomButton from '../components/UI/Buttons/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';

const width = Dimensions.get('window').width;

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={[colors.blue10, colors.white10]}
        style={styles.linearGradient}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <View style={[styles.headContainer]}>
          <TouchableOpacity style={styles.imageContainer}>
            <FastImage
              source={images.back}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.header}>
            <SourceSansSemiBold style={styles.title}>
              {'Profile'}
            </SourceSansSemiBold>
          </View>
        </View>
      </LinearGradient> */}
      <View style={styles.headerImage}>
        <FastImage
          source={images.Subtract}
          style={styles.headImage}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.headContainer]}>
        <TouchableOpacity style={styles.imageContainer}>
          <FastImage
            source={images.back}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <SourceSansSemiBold style={styles.title}>
            {'Profile'}
          </SourceSansSemiBold>
        </View>
      </View>
      <View style={styles.profile}>
        <FastImage
          source={images.profile}
          style={styles.profileImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.innerContainer}>
        <CustomInput
          label={'Patient Name'}
          placeholder={'XYZ'}
          container={styles.input}
        />
        <CustomInput
          label={'Email'}
          placeholder={'XYZ@gmail.com'}
          container={styles.input}
        />
        <CustomInput
          label={'Mobile Number'}
          placeholder={'9265******'}
          container={styles.input}
        />
        <CustomInput
          label={'Gender'}
          placeholder={'Male'}
          container={styles.input}
        />
        <CustomButton
          title={'Next'}
          style={styles.btn}
          textStyle={styles.btnText}
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
    marginHorizontal: 24,
  },
  input: {
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
  linearGradient: {
    borderBottomColor: colors.blue100,
    borderBottomWidth: 2,
    borderBottomRightRadius: 50,
    borderRightWidth: 2,
    paddingTop: 36,
  },
  headContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 36,
    paddingVertical: 12,
  },
  header: {
    width: '70%',
    marginHorizontal: 12,
  },
  headerImage: {
    width: '100%',
    top: -30,
    height: 160,
  },
  headImage: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
  },
  image: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
  },
  profile: {
    left: (width - 110) / 2,
    top: -60,
    backgroundColor: colors.white100,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderTopStartRadius: 60,
    borderColor: '#27A5DA',
    borderTopEndRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
  },
});

export default memo(ProfileScreen);
