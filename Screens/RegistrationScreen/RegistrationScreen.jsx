import React, { useState } from "react";
import { SvgXml, Path } from "react-native-svg";
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

  const svgDo = `
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>
    </svg>
  `;

  const svgClose = `
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18.4999" cy="18.5" r="12" transform="rotate(-45 18.4999 18.5)" fill="white" stroke="#E8E8E8"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z" fill="#BDBDBD"/>
    </svg>
  `;

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
        <View style={styles.avatar}></View>
        <SvgXml
          style={styles.avatarButton}
          width="25"
          height="25"
          xml={svgDo}
        />
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
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    left: "50%",
    marginLeft: -60,
    top: 203,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  avatarButton: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 253,
    top: 284,
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
