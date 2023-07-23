import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const [namePhoto, setNamePhoto] = useState("");
  const [locality, setLocality] = useState("");
  const [urlPhoto, setUrlPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const type = Camera.Constants.Type.back;

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

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        console.log("No access to camera");
      }

      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      if (cameraStatus !== "granted") {
        console.log("No access to camera");
      }

      setHasPermission(status === "granted" && cameraStatus === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onSubmit = async () => {
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    console.log("Credentials", `${locality} + ${namePhoto} `);
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    console.log(urlPhoto);
    navigation.navigate("Posts", {
      namePhoto,
      locality,
      location,
      urlPhoto,
    });
  };

  return (
    <View style={[styles.container, isKeyboardOpen && styles.bgOpen]}>
      <MaterialIcons
        style={styles.logout}
        name="arrow-back"
        size={24}
        color="rgba(33, 33, 33, 0.8)"
        onPress={goBack}
      />
      <Text style={styles.title}>Створити публікацію</Text>
      <View style={styles.line} />

      <Camera style={styles.cameraContainer} type={type} ref={setCameraRef}>
        <View style={styles.cameraRound}>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.camera}
              name="camera-alt"
              size={24}
              color="#BDBDBD"
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();

                  await MediaLibrary.createAssetAsync(uri);
                  setUrlPhoto(uri);
                }
              }}
            />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: urlPhoto }} style={styles.image}></Image>
      </Camera>
      <Text style={styles.text}>Завантажте фото</Text>

      <TextInput
        style={[styles.input, { fontSize: 16, marginTop: 48 }]}
        placeholder="Назва..."
        value={namePhoto}
        onChangeText={setNamePhoto}
        placeholderTextColor="#BDBDBD"
      ></TextInput>

      <View style={styles.lineInput} />

      <TextInput
        style={[styles.input, { fontSize: 16, marginTop: 32, paddingLeft: 30 }]}
        placeholder="Місцевість..."
        value={locality}
        onChangeText={setLocality}
        placeholderTextColor="#BDBDBD"
      ></TextInput>

      <MaterialIcons
        style={styles.localIcon}
        name="location-pin"
        size={24}
        color="rgba(189, 189, 189, 1)"
      />
      <View style={styles.lineInput} />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Опублікувати</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setUrlPhoto(null);
          setCameraRef(null);
        }}
      >
        <View style={styles.trash}>
          <Feather name="trash-2" size={24} color="#DADADA" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    marginTop: -31,
    width: 343,
    height: 240,
    top: 30,
    zIndex: -1,
  },
  container: {
    backgroundColor: "#ffffff",
    marginTop: 55,
    flex: 1,
    alignItems: "center",
  },
  bgOpen: {
    top: -40,
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
  logout: {
    position: "absolute",
    right: "89.33%",
    left: "4.27%",
    top: 10,
  },
  line: {
    marginTop: 50,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
  },

  cameraContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 343,
    height: 240,
    left: "50%",
    marginLeft: -172,
    top: 82,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  cameraRound: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    zIndex: 1,
  },
  camera: {
    left: "50%",
    marginLeft: -12,
    marginTop: 17,
    zIndex: 1,
  },
  text: {
    marginTop: 330,
    width: 343,
    marginLeft: 0,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  input: {
    width: 343,
  },
  lineInput: {
    marginTop: 15,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  localIcon: {
    marginTop: -25,
    width: 343,
    marginLeft: 0,
    zIndex: -1,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    height: 51,
    width: 343,
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
  trash: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    marginTop: 100,
  },
});

export default CreatePostsScreen;
