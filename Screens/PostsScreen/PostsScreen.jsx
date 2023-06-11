import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PostsScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.common}>
      <MaterialIcons
        style={styles.logout}
        name="logout"
        size={24}
        color="#BDBDBD"
        onPress={goToLogin}
      />
      <Text style={styles.title}>Публікації</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  common: { marginTop: 55 },
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
  logout: {
    position: "absolute",
    left: "89.33%",
    right: "4.27%",
    top: 10,
  },
});

export default PostsScreen;
