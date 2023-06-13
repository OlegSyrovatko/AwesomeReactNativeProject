import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
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
      <View style={styles.content}>
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

        {urlPic && (
          <Image source={{ uri: urlPic }} style={styles.image}></Image>
        )}
        {NamePic && <Text style={styles.namePic}>{NamePic}</Text>}
        {urlPic && (
          <View style={styles.photoDetail}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Comments");
              }}
            >
              <View style={styles.commentBlock}>
                <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
                <Text style={styles.comment}>1</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.commentBlock}>
              {latitude && longitude && (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Map", {
                      latitude,
                      longitude,
                    });
                  }}
                >
                  <MaterialIcons
                    style={styles.localIcon}
                    name="location-pin"
                    size={24}
                    color="rgba(189, 189, 189, 1)"
                  />
                </TouchableOpacity>
              )}
              {localityPic && <Text> {localityPic}</Text>}
            </View>
          </View>
        )}
      </View>

      {/* <Text>localityPic {localityPic}</Text>
          <Text>
            latitude {latitude}
            longitude {longitude}
          </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
  },
  content: {
    left: "50%",
    marginLeft: -172,
  },
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
    borderRadius: 16,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    gap: 8,
  },
  userItems: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontFamily: "Roboto",
    fontSize: 13,
    lineHeight: 15,
  },
  userEml: {
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  image: {
    marginTop: 32,
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  namePic: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
    width: 343,
  },
  photoDetail: {
    marginTop: 11,
    display: "flex",
    flexDirection: "row",
    width: 343,
    justifyContent: "space-between",
  },

  commentBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    gap: 9,
  },
  comment: {
    color: "#BDBDBD",
    fontSize: 16,
  },
});

export default PostsScreen;
