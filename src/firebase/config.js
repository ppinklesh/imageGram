import * as firebase from "firebase/app";
import "firebase/storage";  //firebase -> datebase where our images get stored
import "firebase/firestore";

//Firebase configuration

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAnufM5DTTymXkB_7NYGKjCq-ezxmCSRWs",
  authDomain: "pinklesh-imagegram.firebaseapp.com",
  databaseURL: "https://pinklesh-imagegram.firebaseio.com",
  projectId: "pinklesh-imagegram",
  storageBucket: "pinklesh-imagegram.appspot.com",
  messagingSenderId: "130987110702",
  appId: "1:130987110702:web:59233ffb0abae09ca30abf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //creating timestamp

export { projectStorage, projectFirestore, timestamp };
