import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBi_sAK2qszlbZJpuarPO4R1CrKOW78r0c",
  authDomain: "primi-app.firebaseapp.com",
  projectId: "primi-app",
  storageBucket: "primi-app.appspot.com",
  messagingSenderId: "38025486140",
  appId: "1:38025486140:web:15ca1bc9900b0f38350839",
  measurementId: "G-L8JLRG7NLH",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const provider2 = new firebase.auth.PhoneAuthProvider()

export {db , auth , provider , provider2}