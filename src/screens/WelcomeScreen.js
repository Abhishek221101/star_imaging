import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../themes/colors';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/Index';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';
import SourceSansRegular from '../components/Fonts/SourceSansRegular';
import CustomButton from '../components/UI/Buttons/CustomButton';
import SourceSansMedium from '../components/Fonts/SourceSansMedium';

const WelcomeScreen = ({navigation}) => {
  const navigationHandler = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.blue10, colors.white10]}
        style={styles.linearGradient}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}>
        <FastImage
          source={images.labExperiment}
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <SourceSansSemiBold style={styles.title}>
            {'Welcome to'}
          </SourceSansSemiBold>
          <SourceSansSemiBold style={styles.title}>
            {'Star DAD Servies'}
          </SourceSansSemiBold>
          <SourceSansRegular style={styles.text}>
            {
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
          </SourceSansRegular>
        </View>
        <CustomButton
          title={'Get Started'}
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={navigationHandler}
        />
        <View style={styles.footer}>
          <SourceSansMedium style={styles.footerText}>
            {'I Agree to the '}
          </SourceSansMedium>
          <Pressable>
            <SourceSansMedium style={styles.linkText}>{'TC '}</SourceSansMedium>
          </Pressable>
          <SourceSansMedium style={styles.footerText}>
            {'and '}
          </SourceSansMedium>
          <Pressable>
            <SourceSansMedium style={styles.linkText}>
              {'Privacy Policy '}
            </SourceSansMedium>
          </Pressable>
          <SourceSansMedium style={styles.footerText}>
            {'of Star Imaging & Path Lab'}
          </SourceSansMedium>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
  image: {
    width: 339,
    height: 231,
  },
  linearGradient: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.blue100,
    borderBottomWidth: 6,
    borderBottomRightRadius: 100,
    borderRightWidth: 1,
  },
  innerContainer: {
    margin: 18,
    flex: 0.4,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  title: {
    fontSize: 32,
    color: colors.blue100,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.black,
    textAlign: 'center',
  },
  btn: {
    height: 40,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: colors.black20,
  },
  linkText: {
    fontSize: 12,
    color: colors.blue100,
    textDecorationLine: 'underline',
  },
});

export default memo(WelcomeScreen);
