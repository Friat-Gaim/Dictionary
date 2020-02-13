import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqAnWrKIqiHgS03MfDyv8Z9bCPauP-Rao",
  authDomain: "dictionary-6e6e1.firebaseapp.com",
  databaseURL: "https://dictionary-6e6e1.firebaseio.com",
  projectId: "dictionary-6e6e1",
  storageBucket: "dictionary-6e6e1.appspot.com",
  messagingSenderId: "335712005951",
  appId: "1:335712005951:web:1ca8d4fec2f475bdf5ed8a",
  measurementId: "G-YXLEPX4X8M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
