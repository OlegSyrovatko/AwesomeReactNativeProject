import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import avatarIcon from "../../assets/avatarIcon.png";

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
      <View style={styles.line} />
      <View style={styles.user}>
        <ImageBackground
          source={avatarIcon}
          resizeMode="cover"
          style={styles.imageAvatar}
        ></ImageBackground>
        <View style={styles.userItems}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEml}>email@example.com</Text>
        </View>
      </View>

      {/* {urlPic && (
        <>
          <Text>NamePic {NamePic}</Text>
          <Text>localityPic {localityPic}</Text>
          <Text>
            latitude {latitude}
            longitude {longitude}
          </Text>
          <Text>urlPic {urlPic}</Text>
        </>
      )} */}
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
  line: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
  },
  imageAvatar: {
    width: 60,
    height: 60,
    radius: 16,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginLeft: 16,
    gap: 8,
  },
  userItems: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontFamily: "Roboto",
    fontStyle: "Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  userEml: {
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
