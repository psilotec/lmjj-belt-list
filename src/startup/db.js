import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCayVOgY2hlO0DPxvo5z36jKCDZv3CVkmw",
  authDomain: "lmjj-belt-list.firebaseapp.com",
  databaseURL: "https://lmjj-belt-list.firebaseio.com",
  projectId: "lmjj-belt-list",
  storageBucket: "lmjj-belt-list.appspot.com",
  messagingSenderId: "1023332956367"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
