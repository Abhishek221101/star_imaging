import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import OtpVerification from '../screens/OtpVerification';
import loginScreen from '../screens/loginScreen';
import BottomNav from './BottomNav';
import HomeNav from './HomeNav';
import Telemedicen from '../screens/Telemedicen';
import AmbulanceScreen from '../screens/AmbulanceScreen';
import Diagnostic from '../screens/Diagnostic';
import MedicineScreen from '../screens/MedicineScreen';
import RentEquipment from '../screens/RentEquipment';
import AirAmbulance from '../screens/Booking/AirAmbulance';
import RoadAmbulance from '../screens/Booking/RoadAmbulance';
import CheckoutScreen from '../screens/CheckoutScreen';
import MyCart from '../screens/MyCart';
import OrderDetails from '../screens/OrderDetails';
import AddAddress from '../screens/AddAddress';
import PaymentScreen from '../screens/PaymentScreen';
import RecordScreen from '../screens/RecordScreen';
import CreateRecord from '../screens/CreateRecord';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={loginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Telemedicine"
          component={Telemedicen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ambulance"
          component={AmbulanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home Diagnostics"
          component={Diagnostic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Buy star product"
          component={MedicineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rent medical equipment"
          component={RentEquipment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AirAmbulance"
          component={AirAmbulance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RodeAmbulance"
          component={RoadAmbulance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Medicine"
          component={MedicineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={AddAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecordList"
          component={RecordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateRecord"
          component={CreateRecord}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default memo(Root);
