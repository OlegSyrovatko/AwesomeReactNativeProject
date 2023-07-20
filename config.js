// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";

// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMNihuA0fZmEVeYaLu5aa6SIQrlSn72_E",
  authDomain: "awesomereactnativeproject.firebaseapp.com",
  databaseURL: "https://awesomereactnativeproject.firebaseio.com",
  projectId: "awesomereactnativeproject",
  storageBucket: "awesomereactnativeproject.appspot.com",
  messagingSenderId: "585651538821",
  appId: "1:585651538821:web:3012839d7fa768801a12ec",
  measurementId: "G-T3RPJKQXKY",
};

// npm install -g firebase-tools

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
