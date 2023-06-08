import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import Svg, { SvgUri } from "react-native-svg";
import Svg, { Circle } from "react-native-svg";
import { SvgXml } from "react-native-svg";

// import SvgUri from "react-native-svg-uri";
// import testSvg from "./assets/add.svg";

import SVGImg from "./assets/add.svg";
const SvgIcon = () => {
  return (
    <View style={styles.container}>
      {/* <SvgUri width="200" height="200" svgXmlData={testSvg} /> */}
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="50"
          stroke="purple"
          strokeWidth=".5"
          fill="violet"
        />
      </Svg>
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
});

export default SvgIcon;
