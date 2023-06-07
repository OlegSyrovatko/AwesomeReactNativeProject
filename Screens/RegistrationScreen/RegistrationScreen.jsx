import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import image from "../../images/PhotoBG.png";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.bg}>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput
            style={[styles.login, { paddingLeft: 16, fontSize: 16 }]}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
          ></TextInput>
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
  login: {
    position: "absolute",
    left: 16,
    right: 0,
    top: 160,
    bottom: 0,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
});

export default RegistrationScreen;
