import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCLiP9NA-kaJ_peKLGKXchHVESWFpXABnc",
  authDomain: "notesapp-32593.firebaseapp.com",
  projectId: "notesapp-32593",
  storageBucket: "notesapp-32593.firebasestorage.app",
  messagingSenderId: "698700175080",
  appId: "1:698700175080:web:e46e36f3977c213be69b5d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);