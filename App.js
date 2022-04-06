import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Image, Button} from 'react-native';
import SignInScreen from './AuthenticatorSRC/screens/SignInScreen';
import SignUpScreen from './AuthenticatorSRC/screens/SignUpScreen';
import {useState} from "react";
import ConfirmEmailScreen from './AuthenticatorSRC/screens/ConfirmEmailScreen';
///import HomeScreen from './AuthenticatorSRC/screens/HomeScreen';
import ResetPasswordScreen from './AuthenticatorSRC/screens/ResetPasswordScreen';
import ConfirmResetScreen from './AuthenticatorSRC/screens/ConfirmResetScreen';

//import Calendar from './Calendarsrc/CalendarScreen/Calendar';
import CalendarScreen from './AuthenticatorSRC/screens/CalendarScreen';
import ReviewScreen from './AuthenticatorSRC/screens/ReviewsScreen/ReviewScreen';

export default function App() {
  const [current, setCurrent] = useState('Login');
  const Login = (
    <View Style={styles.root}>
      <SignInScreen/> {/*Replace this statment to change screens*/}
    </View>
  );
  
  const SignUp = (
    <View style={styles.container}>
      <SignInScreen></SignInScreen>
    </View>

  );
  

  return current == 'Login' ? Login : current;

  
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    paddingBottom: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player:{
    width: 200,
    height: 300,
  },
  root: {
    flex: 5,
    backgroundColor: '#F9FBFC',
  },
  logo:{
    width: 50,
    height: 50,
    right: 180,
    top: -550,
  },
  
});
