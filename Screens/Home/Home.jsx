import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import PostsScreen from "../PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let style;
          if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Create Post") {
            color = "#FFFFFF";
            iconName = focused ? "plus" : "plus";
            style = styles.add;
          } else if (route.name === "Posts") {
            iconName = focused ? "appstore-o" : "appstore-o";
          }
          return (
            <View style={style}>
              <AntDesign name={iconName} size={size} color={color} />
              {focused ? null : <Text style={styles.text}>{route.name}</Text>}
            </View>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="Create Post" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    width: 70,
    height: 40,
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 20,
    marginBottom: 20,
  },
  text: {
    display: "none",
  },
});

export default Home;
