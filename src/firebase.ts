import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8G157LylZEv3elf0pd15J8Htl2wCBz3c",
  authDomain: "askme-questions.firebaseapp.com",
  databaseURL: "https://askme-questions.firebaseio.com",
  projectId: "askme-questions",
  storageBucket: "askme-questions.appspot.com",
  messagingSenderId: "639620704508",
  appId: "1:639620704508:web:9a56cc1e00012d6089cf79",
  measurementId: "G-GMNDNKXF59",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
