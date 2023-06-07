// import React from 'react';

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../images/PhotoBG.png";

// import { useSelector, useDispatch } from 'react-redux';
// import { setStatusFilter } from 'redux/filtersSlice';
// import { getFilter } from 'redux/selectors';
// import { Find } from './Filter.styled';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>RegistrationScreen</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default RegistrationScreen;
