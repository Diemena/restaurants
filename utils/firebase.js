import firebase from 'firebase/app'
import 'firebase/firestore'


 const firebaseConfig = {
    apiKey: "AIzaSyDMF7H7CLOu0dFRqYdLE1Grzajb-fHbskA",
    authDomain: "restaurants-9c263.firebaseapp.com",
    projectId: "restaurants-9c263",
    storageBucket: "restaurants-9c263.appspot.com",
    messagingSenderId: "1039520905701",
    appId: "1:1039520905701:web:31cedea15b99d6ac1bd70c"
  }
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig)