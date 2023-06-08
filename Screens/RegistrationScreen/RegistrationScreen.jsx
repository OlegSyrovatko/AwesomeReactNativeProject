import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import image from "../../images/PhotoBG.png";
import { FontAwesome } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.bg}>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput
            style={[styles.input, { paddingLeft: 16, fontSize: 16, top: 160 }]}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
          ></TextInput>
          <TextInput
            style={[styles.input, { paddingLeft: 16, fontSize: 16, top: 226 }]}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          ></TextInput>
          <TextInput
            style={[styles.input, { paddingLeft: 16, fontSize: 16, top: 292 }]}
            placeholder="Пароль"
            type="password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor="#BDBDBD"
          ></TextInput>
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{ position: "absolute", right: 10, top: 305 }}
          >
            <FontAwesome
              name={passwordVisible ? "eye" : "eye-slash"}
              size={24}
              color="#BDBDBD"
              style={[{ marginRight: 20 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
  bg: {
    position: "absolute",
    width: 375,
    height: 549,
    left: "50%",
    marginLeft: -187.5,
    top: 263,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  text: {
    position: "absolute",
    width: 160,
    height: 35,
    left: 108,
    top: 92,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },
  input: {
    position: "absolute",
    left: 16,
    right: 0,
    bottom: 0,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  button: {
    position: "absolute",
    left: 16,
    right: 16,
    height: 51,
    top: 385,
    bottom: 179,
    width: 343,
    height: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    gap: 12,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    width: 120,
    height: 19,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  textLogin: {
    position: "absolute",
    width: 159,
    height: 19,
    left: 108,
    bottom: 78,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
