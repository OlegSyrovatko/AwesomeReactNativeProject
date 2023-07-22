// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";

// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

import Constants from "expo-constants";

apiKey = Constants.manifest?.extra?.firebaseApiKey;
authDomain = Constants.manifest?.extra?.firebaseAuthDomain;
databaseURL = Constants.manifest?.extra?.firebaseDatabaseURL;
projectId = Constants.manifest?.extra?.firebaseProjectId;
storageBucket = Constants.manifest?.extra?.firebaseStorageBucket;
messagingSenderId = Constants.manifest?.extra?.firebaseMessagingSenderId;
appId = Constants.manifest?.extra?.firebaseAppId;
measurementId = Constants.manifest?.extra?.firebaseMeasurementId;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// npm install -g firebase-tools

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
