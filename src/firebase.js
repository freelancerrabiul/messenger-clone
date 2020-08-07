 import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAEPsb-IaS4x-eRgy_ZlsIq9RhxOojbLco",
        authDomain: "goovla.firebaseapp.com",
        databaseURL: "https://goovla.firebaseio.com",
        projectId: "goovla",
        storageBucket: "goovla.appspot.com",
        messagingSenderId: "819611760470",
        appId: "1:819611760470:web:017cd74e9786c1446c88f7",
        measurementId: "G-J36M62F7KG"
     
 });

 const db =firebaseApp.firestore();
 export default db;