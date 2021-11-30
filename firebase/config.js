import '@firebase/auth';
import '@firebase/firestore';
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyC-ww6W-7cCekffouaJtpKOEzpo5KhAy4E",
    authDomain: "carrefull-b37a1.firebaseapp.com",
    projectId: "carrefull-b37a1",
    storageBucket: "carrefull-b37a1.appspot.com",
    messagingSenderId: "331726631086",
    appId: "1:331726631086:web:897dc430dd72edee857d3f",
    measurementId: "G-ZGCXDN1EJ3"
};

firebase.initializeApp(firebaseConfig);

export { firebase }