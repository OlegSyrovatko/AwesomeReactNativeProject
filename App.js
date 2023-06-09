// start project for home network
// npx expo start --tunnel 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}

      <View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

