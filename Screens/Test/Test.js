import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";

const Test = () => {
  const [text, setText] = useState("");
  return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type text"
          value={text}
          onChangeText={setText}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30
  },
});

export default Test;