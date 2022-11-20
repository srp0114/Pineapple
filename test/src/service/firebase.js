import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKmtK0a2WCXtMRRILItUQui6nFuj7yPcE",
    authDomain: "chatting-cf17a.firebaseapp.com",
    databaseURL: "https://chatting-cf17a-default-rtdb.firebaseio.com",
    projectId: "chatting-cf17a",
    storageBucket: "chatting-cf17a.appspot.com",
    messagingSenderId: "940241354973",
    appId: "1:940241354973:web:e368e6920e77cbabed1b34",
    measurementId: "G-0F46KSDMZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService =  getAuth(app);
export const dbService = getDatabase();