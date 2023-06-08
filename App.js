// start project for home network
// npx expo start --tunnel 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import SvgIcon from './Screens/SvgIcon';

export default function App() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <SvgIcon /> */}
      <View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

