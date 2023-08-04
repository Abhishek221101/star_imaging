import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MedicalRecords from '../screens/MedicalRecords';
import MyCart from '../screens/MyCart';
import ProfileScreen from '../screens/ProfileScreen';
import FastImage from 'react-native-fast-image';
import {colors} from '../themes/colors';
import SourceSansSemiBold from '../components/Fonts/SourceSansSemiBold';
import {images} from '../assets/Index';
import RecordScreen from '../screens/RecordScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const tabButton = useCallback((focused, image1, image2, text) => {
    return (
      <View style={styles.navContainer}>
        <FastImage
          style={styles.icon}
          source={focused ? image1 : image2}
          resizeMode="contain"
        />
        {focused && (
          <SourceSansSemiBold
            style={[
              styles.title,
              {color: focused ? colors.blue100 : colors.white100},
            ]}>
            {text}
          </SourceSansSemiBold>
        )}
      </View>
    );
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="HomeNav"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            tabButton(focused, images.homeBlue, images.homeGrey, 'Home'),
        }}
      />
      <Tab.Screen
        name="RecordNav"
        component={MedicalRecords}
        options={{
          tabBarIcon: ({focused}) =>
            tabButton(focused, images.recordBlue, images.recordGrey, 'Record'),
        }}
      />
      <Tab.Screen
        name="CartNav"
        component={MyCart}
        options={{
          tabBarIcon: ({focused}) =>
            tabButton(focused, images.cartBlue, images.cartGrey, 'Cart'),
        }}
      />
      <Tab.Screen
        name="ProfileNav"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            tabButton(
              focused,
              images.profileBlue,
              images.profileGrey,
              'Profile',
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    margin: 24,
    height: 72,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    shadowColor: colors.grey200,
    borderRadius: 100,
    elevation: 12,
    borderColor: colors.grey200,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 12,
    paddingLeft: 5,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default memo(BottomNav);
