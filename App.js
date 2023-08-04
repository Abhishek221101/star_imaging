/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RentEquipment from './src/screens/RentEquipment';
import TeleMedicen from './src/screens/Telemedicen';
import MedicineScreen from './src/screens/MedicineScreen';
import MyCart from './src/screens/MyCart';
import ProfileScreen from './src/screens/ProfileScreen';
import OrderItems from './src/components/OrderItems';
import OrderDetails from './src/screens/OrderDetails';
import AddAddress from './src/screens/AddAddress';
import Root from './src/navigation/Root';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Root />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
