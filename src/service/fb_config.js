import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDd1qyjfAFs7NVP_1o5INT28CA3pswZbg",
  authDomain: "totomo-d3049.firebaseapp.com",
  databaseURL:
    "https://totomo-d3049-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "totomo-d3049",
  storageBucket: "totomo-d3049.appspot.com",
  messagingSenderId: "818390594544",
  appId: "1:818390594544:web:c2fec062c69aba50cc2335",
};

const app = firebase.initializeApp(firebaseConfig);

export const fb_DB = firebase.database();
export const fb_storage = firebase.storage();
