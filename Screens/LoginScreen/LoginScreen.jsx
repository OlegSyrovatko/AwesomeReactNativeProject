import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import image from "../../assets/PhotoBG.png";

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [eml, setEml] = useState("");
  const [pwd, setPwd] = useState("");

  const goToReg = () => {
    navigation.navigate("Main");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setIsKeyboardOpen(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setIsKeyboardOpen(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onLogin = async () => {
    try {
      const currentUser = await signInWithEmailAndPassword(auth, eml, pwd);
      // console.log(currentUser);
      console.log("Login successful");

      navigation.navigate("Home");
    } catch (error) {
      console.log("Login failed", error);
    }
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <View style={[styles.bg, isKeyboardOpen && styles.bgOpen]}>
            <Text style={styles.text}>Увійти</Text>
            <TextInput
              style={[
                styles.input,
                { paddingLeft: 16, fontSize: 16, top: 100 },
              ]}
              placeholder="Адреса електронної пошти"
              value={eml}
              onChangeText={setEml}
              placeholderTextColor="#BDBDBD"
            ></TextInput>
            <TextInput
              style={[
                styles.input,
                { paddingLeft: 16, fontSize: 16, top: 166 },
              ]}
              placeholder="Пароль"
              value={pwd}
              onChangeText={setPwd}
              type="password"
              secureTextEntry={!passwordVisible}
              placeholderTextColor="#BDBDBD"
            ></TextInput>
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={{ position: "absolute", right: 10, top: 180 }}
            >
              <FontAwesome
                name={passwordVisible ? "eye" : "eye-slash"}
                size={24}
                color="#BDBDBD"
                style={[{ marginRight: 20 }]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.textLogin} onPress={goToReg}>
              Немає акаунту? Зареєструватися
            </Text>
          </View>
        </View>
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
    height: height,
  },
  overlay: {
    width: width,
    height: "100%",
  },
  imageKb: {
    top: 100,
  },
  bg: {
    position: "absolute",
    width: 375,
    height: 549,
    left: "50%",
    marginLeft: -187.5,
    top: 323,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  bgOpen: {
    top: 273,
  },
  text: {
    position: "absolute",
    width: 160,
    height: 35,
    left: 108,
    top: 32,

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
    top: 259,
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  textLogin: {
    position: "absolute",
    // width: 159,
    height: 19,
    // left: 108,
    left: "50%",
    marginLeft: -126,
    top: 326,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;
