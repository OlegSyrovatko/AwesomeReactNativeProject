import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
  const route = useRoute();

  let lat;
  let lon;

  if (route.params) {
    if (route.params.latitude) {
      lat = route.params.latitude;
    }
    if (route.params.longitude) {
      lon = route.params.longitude;
    }
  }

  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <Text>{lat}</Text>
      <Text>{lon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MapScreen;
