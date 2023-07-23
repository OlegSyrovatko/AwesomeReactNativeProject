import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "./config";

const AuthWrapper = ({ children }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.navigate("Login");
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  return <>{children}</>;
};

export default AuthWrapper;
