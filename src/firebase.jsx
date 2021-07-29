import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8CO1HIJOkIIR8ubfag259Rg71WlJyz24",
    authDomain: "fir-app-71666.firebaseapp.com",
    projectId: "fir-app-71666",
    storageBucket: "fir-app-71666.appspot.com",
    messagingSenderId: "962357343546",
    appId: "1:962357343546:web:0b4fb703f13131f0544c03"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);
  export const db = firebaseDB.firestore();