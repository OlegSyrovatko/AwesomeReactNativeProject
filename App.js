// start project for home network
// npx expo start --tunnel

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from "./Screens/Home";
import CommentsScreen from './Screens/CommentsScreen';
import MapScreen from './Screens/MapScreen';
// import Test from './Screens/Test';

const MainStack = createStackNavigator();

export default function App() {
  return (
    // <Test></Test>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Main" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Map" component={MapScreen} />
      </MainStack.Navigator>
    </NavigationContainer> 
  );
}
