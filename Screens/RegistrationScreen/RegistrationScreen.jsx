import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
import image from "../../assets/PhotoBG.png";
import avatarIcon from "../../assets/avatarIcon.png";

const RegistrationScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [lgn, setLgn] = useState("");
  const [eml, setEml] = useState("");
  const [pwd, setPwd] = useState("");

  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate("Login");
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

  const onReg = () => {
    console.log("Credentials", `${lgn} + ${eml} + ${pwd}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.overlay}>
            <View style={[styles.bg, isKeyboardOpen && styles.bgOpen]}>
              <Text style={styles.text}>Реєстрація</Text>

              <TextInput
                style={[
                  styles.input,
                  { paddingLeft: 16, fontSize: 16, top: 160 },
                ]}
                placeholder="Логін"
                value={lgn}
                onChangeText={setLgn}
                placeholderTextColor="#BDBDBD"
              ></TextInput>
              <TextInput
                style={[
                  styles.input,
                  { paddingLeft: 16, fontSize: 16, top: 226 },
                ]}
                placeholder="Адреса електронної пошти"
                value={eml}
                onChangeText={setEml}
                placeholderTextColor="#BDBDBD"
              ></TextInput>

              <TextInput
                style={[
                  styles.input,
                  { paddingLeft: 16, fontSize: 16, top: 292 },
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
                style={{ position: "absolute", right: 10, top: 305 }}
              >
                <FontAwesome
                  name={passwordVisible ? "eye" : "eye-slash"}
                  size={24}
                  color="#BDBDBD"
                  style={[{ marginRight: 20 }]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onReg}>
                <Text style={styles.buttonText}>Зареєструватися</Text>
              </TouchableOpacity>
              <Text style={styles.textLogin} onPress={goToLogin}>
                Вже є акаунт? Увійти
              </Text>
              <View style={styles.avatar}>
                {isKeyboardOpen && (
                  <ImageBackground
                    source={avatarIcon}
                    resizeMode="cover"
                    style={styles.imageAvatar}
                  ></ImageBackground>
                )}
                {isKeyboardOpen ? (
                  <AntDesign
                    style={styles.avatarIcon}
                    name="closecircleo"
                    size={25}
                    color="#E8E8E8"
                  />
                ) : (
                  <AntDesign
                    style={styles.avatarIcon}
                    name="pluscircleo"
                    size={25}
                    color="#FF6C00"
                  />
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    top: 263,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  bgOpen: {
    top: 147,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    left: "50%",
    marginTop: -60,
    marginLeft: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  imageAvatar: {
    width: "100%",
    height: "100%",
  },
  avatarIcon: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 108,
    top: 76,
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
