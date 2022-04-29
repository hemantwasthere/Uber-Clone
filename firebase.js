import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtS3zvn9Wa1X7ENoWnXHNCIXs8iSh2D9Y",
    authDomain: "uber-clone-331dd.firebaseapp.com",
    projectId: "uber-clone-331dd",
    storageBucket: "uber-clone-331dd.appspot.com",
    messagingSenderId: "685472817552",
    appId: "1:685472817552:web:19f7a3c5626e3b1e1ad315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth}