import React, { useEffect, useState } from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TextInput,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  collection,
  getFirestore,
  onSnapshot,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import avatarIcon from "../../assets/avatarIcon.png";

const CommentsScreen = () => {
  const navigation = useNavigation();
  const uid = useSelector((state) => state.values.uid);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [inputHeight, setInputHeight] = useState(40);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const {
    params: { postId, urlPhoto },
  } = useRoute();

  const handleRefresh = () => {
    setIsRefreshing(true);
    getCommentsFromFirestore();
  };

  const doComment = async () => {
    console.log(comment, postId);
    try {
      const db = getFirestore();
      const commentData = {
        uid,
        text: comment,
        date: serverTimestamp(),
      };

      await addDoc(collection(db, "posts", postId, "comments"), commentData);
      const postRef = doc(db, "posts", postId);
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        const currentCommentCount = postDoc.data().commentCount || 0;
        await updateDoc(postRef, { commentCount: currentCommentCount + 1 });
      }
      setComment("");

      console.log("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  const formatDate = (seconds) => {
    const date = new Date(seconds * 1000);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("uk-UA", options);
  };

  const handleContentSizeChange = (event) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    setInputHeight(contentHeight + 20);
  };

  const getCommentsFromFirestore = () => {
    const db = getFirestore();
    const commentsCollection = collection(db, "posts", postId, "comments");

    return onSnapshot(commentsCollection, (snapshot) => {
      const commentsData = [];
      snapshot.forEach((doc) => {
        const data = doc.data();

        commentsData.push({
          id: doc.id,
          uid: data.uid,
          text: data.text,
          date: data.date,
        });
      });

      commentsData.sort((a, b) => a.date - b.date);
      setComments(commentsData);
      setIsRefreshing(false);
    });
  };

  useEffect(() => {
    // Fetch comments when the component mounts
    const unsubscribe = getCommentsFromFirestore();

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

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

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    >
      <View style={styles.container}>
        <MaterialIcons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="rgba(33, 33, 33, 0.8)"
          onPress={goBack}
        />
        <Text style={styles.title}>Коментарі</Text>
        <View style={styles.line} />
        <View key={postId}>
          {urlPhoto && (
            <Image source={{ uri: urlPhoto }} style={styles.imagePhoto} />
          )}
        </View>
        {comments.map((comment) => (
          <View key={comment.id} style={styles.commentContainer}>
            <Image source={avatarIcon} style={styles.imageAvatar} />

            <View>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
            <View>
              <Text style={styles.commentDateText}>
                {formatDate(comment.date)}
              </Text>
            </View>
          </View>
        ))}
        <View style={[styles.inputContainer, isKeyboardOpen && styles.bgOpen]}>
          <View style={styles.upBackground}>
            <MaterialIcons
              style={styles.upIcon}
              name="arrow-back"
              size={24}
              color="#FFF"
              onPress={doComment}
            />
          </View>
          <TextInput
            style={[
              styles.input,
              {
                height: inputHeight,
                paddingLeft: 16,
                paddingBottom: 5,
                paddingTop: 5,
                fontSize: 16,
                marginBottom: 20,
                paddingRight: 40,
              },
            ]}
            placeholder="Коментувати..."
            value={comment}
            onChangeText={setComment}
            placeholderTextColor="#BDBDBD"
            multiline={true}
            numberOfLines={4}
            onContentSizeChange={handleContentSizeChange}
          ></TextInput>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: 1,
    alignItems: "center",
  },
  back: {
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
  inputContainer: {
    marginTop: 30,
    position: "relative",
  },
  bgOpen: {
    marginBottom: 70,
  },
  input: {
    width: 343,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    backgroundColor: "#e5e3e3",
  },
  imagePhoto: {
    marginTop: 90,
    width: 343,
    height: 240,
    borderRadius: 8,
  },

  commentContainer: {
    position: "relative",
    marginLeft: 43,
    width: 300,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e5e3e3",
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  imageAvatar: {
    left: -43,
    position: "absolute",
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  commentDateText: {
    marginTop: 5,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 11.72,
    textAlign: "right",
  },

  commentText: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
  },
  upBackground: {
    position: "absolute",
    top: 9,
    right: 11,
    transform: [{ rotate: "90deg" }],
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    zIndex: 1,
  },
  upIcon: { paddingLeft: 5, paddingTop: 5 },
});

export default CommentsScreen;
