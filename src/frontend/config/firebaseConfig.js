import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA4wwou2M-TOX7ZbrI1JaIJBaffWgMkCGc",
    authDomain: "sprintretro-415c5.firebaseapp.com",
    databaseURL: "https://sprintretro-415c5.firebaseio.com",
    storageBucket: "sprintretro-415c5.appspot.com",
    messagingSenderId: "907512867419"
  };

firebase.initializeApp(config);
const database = firebase.database();

export default database;