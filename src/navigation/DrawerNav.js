import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AmbulanceScreen from '../screens/AmbulanceScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Ambulance" component={AmbulanceScreen} />
      <Drawer.Screen name="Ambulance" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default memo(DrawerNav);
