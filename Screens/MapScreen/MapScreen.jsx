import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
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
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: lat, longitude: lon }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
