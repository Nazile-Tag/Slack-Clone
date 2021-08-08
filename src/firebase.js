import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBIhEbgR-D932Hha3PLICet0R1yeKWki6g",
    authDomain: "slack-clone-c9296.firebaseapp.com",
    projectId: "slack-clone-c9296",
    storageBucket: "slack-clone-c9296.appspot.com",
    messagingSenderId: "860225352807",
    appId: "1:860225352807:web:455f5fd846434d095b10c2",
    measurementId: "G-JJJQ4VWRG8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };


  