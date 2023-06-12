import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PostsScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const route = useRoute();
  let NamePic;
  let localityPic;
  let latitude;
  let longitude;
  let urlPic;
  if (route.params) {
    if (route.params.namePhoto) {
      NamePic = route.params.namePhoto;
    }
    if (route.params.locality) {
      localityPic = route.params.locality;
    }
    if (route.params.location) {
      latitude = route.params.location.coords.latitude;
      longitude = route.params.location.coords.longitude;
    }
    if (route.params.urlPhoto) {
      urlPic = route.params.urlPhoto;
    }
  }

  // const {
  //   params: { namePhoto, locality, location, urlPhoto },
  // } = useRoute();

  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.back}
        name="logout"
        size={24}
        color="rgba(189, 189, 189, 1)"
        onPress={goToLogin}
      />
      <Text style={styles.title}>Публікації</Text>
      <Text>NamePic {NamePic}</Text>
      <Text>localityPic {localityPic}</Text>
      <Text>
        latitude {latitude}
        longitude {longitude}
      </Text>
      <Text>urlPic {urlPic}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 55 },
  title: {
    position: "absolute",
    height: 22,
    left: 48,
    right: 49,
    top: 11,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,

    textAlign: "center",
    letterSpacing: -0.408,

    color: "#212121",
  },
  back: {
    position: "absolute",
    left: "89.33%",
    right: "4.27%",
    top: 10,
  },
});

export default PostsScreen;
