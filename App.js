// start project for home network
// npx expo start --tunnel

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
// import Test from './Screens/Test';

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    // <Test></Test>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Main">
        <MainStack.Screen name="Main" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        {/* <MainStack.Screen
          name="Main"
          component={RegistrationScreen}
          options={{ title: "Start screen" }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>


  );
}
