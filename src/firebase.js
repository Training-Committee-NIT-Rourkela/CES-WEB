import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailLink, sendSignInLinkToEmail, isSignInWithEmailLink } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDI_BEfoHce4HXMSk4jF6xG8d-4S44GiY8",
    authDomain: "ces-web-d0dcb.firebaseapp.com",
    projectId: "ces-web-d0dcb",
    storageBucket: "ces-web-d0dcb.firebasestorage.app",
    messagingSenderId: "256370093112",
    appId: "1:256370093112:web:3809b10ea95b8825038acd",
    measurementId: "G-9YFXFCVRX9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailLink, sendSignInLinkToEmail, isSignInWithEmailLink };
