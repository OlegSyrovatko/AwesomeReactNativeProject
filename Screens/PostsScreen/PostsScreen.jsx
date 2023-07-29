import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { setOffline, setUserData } from "../../redux/reducers/slice";
import { signOut } from "firebase/auth";
import { auth } from "../../config";
import avatarIcon from "../../assets/avatarIcon.png";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = getDataFromFirestore();
    return () => {
      unsubscribe();
    };
  }, []);

  const getDataFromFirestore = () => {
    const db = getFirestore();
    const postsCollection = collection(db, "posts");

    return onSnapshot(postsCollection, (snapshot) => {
      const postsData = [];
      const commentCountsData = {};
      snapshot.forEach((doc) => {
        const data = doc.data();

        const post = {
          id: doc.id,
          locality: data.locality,
          namePhoto: data.namePhoto,
          urlPhoto: data.urlPhoto,
          latitude: data.location.coords.latitude,
          longitude: data.location.coords.longitude,
          commentCount: data.commentCount,
          date: data.date,
        };

        postsData.push(post);
      });

      postsData.sort((a, b) => b.date - a.date);
      setPosts(postsData);
      setIsRefreshing(false);
    });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    getDataFromFirestore();
  };

  const dispatch = useDispatch();
  const goToLogin = () => {
    signOut(auth)
      .then(() => {
        dispatch(setOffline());
        dispatch(
          setUserData({
            uid: "",
            name: "",
            email: "",
          })
        );
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const userName = useSelector((state) => state.values.userName);
  const email = useSelector((state) => state.values.email);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    >
      <View style={styles.container}>
        <MaterialIcons
          style={styles.back}
          name="logout"
          size={24}
          color="rgba(189, 189, 189, 1)"
          onPress={goToLogin}
        />
        <Text style={styles.title}>Публікації</Text>
        <View style={styles.line} />
        <View style={styles.content}>
          <View style={styles.user}>
            <ImageBackground
              source={avatarIcon}
              resizeMode="cover"
              style={styles.imageAvatar}
            ></ImageBackground>
            <View style={styles.userItems}>
              <Text style={styles.userName}>{userName}</Text>
              <Text style={styles.userEml}>{email}</Text>
            </View>
          </View>
          {posts.map((post) => (
            <View key={post.id}>
              {post.urlPhoto && (
                <Image source={{ uri: post.urlPhoto }} style={styles.image} />
              )}
              {post.namePhoto && (
                <Text style={styles.namePic}>{post.namePhoto}</Text>
              )}
              {post.urlPhoto && (
                <View style={styles.photoDetail}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Comments", {
                        postId: post.id,
                        urlPhoto: post.urlPhoto,
                      });
                    }}
                  >
                    <View style={styles.commentBlock}>
                      <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
                      <Text style={styles.comment}>{post.commentCount}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.commentBlock}>
                    {post.latitude && post.longitude && (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Map", {
                            latitude: post.latitude,
                            longitude: post.longitude,
                          });
                        }}
                      >
                        <MaterialIcons
                          style={styles.localIcon}
                          name="location-pin"
                          size={24}
                          color="rgba(189, 189, 189, 1)"
                        />
                      </TouchableOpacity>
                    )}
                    {post.locality && (
                      <Text style={styles.locality}> {post.locality}</Text>
                    )}
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    marginBottom: 30,
  },
  content: {
    left: "50%",
    marginLeft: -172,
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
  back: {
    position: "absolute",
    left: "89.33%",
    right: "4.27%",
    top: 10,
  },
  line: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
  },
  imageAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    gap: 8,
  },
  userItems: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontFamily: "Roboto",
    fontSize: 13,
    lineHeight: 15,
  },
  userEml: {
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  image: {
    marginTop: 32,
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  namePic: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
    width: 343,
  },
  photoDetail: {
    marginTop: 11,
    display: "flex",
    flexDirection: "row",
    width: 343,
    justifyContent: "space-between",
  },

  commentBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    gap: 9,
  },
  comment: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  locality: {
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default PostsScreen;
