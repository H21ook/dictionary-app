import * as firebase from 'firebase';
 
const config = {
    apiKey: "AIzaSyCzuuV1Z-Eozct9Yhllf82WqrWf1Jd1Bbs",
    authDomain: "jem-dictionary.firebaseapp.com",
    databaseURL: "https://jem-dictionary.firebaseio.com",
    projectId: "jem-dictionary",
    storageBucket: "jem-dictionary.appspot.com",
    messagingSenderId: "187029587158"
};
 
firebase.initializeApp(config);
const database = firebase.database();
 
export default database;