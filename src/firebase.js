import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailLink, sendSignInLinkToEmail, isSignInWithEmailLink } from "firebase/auth";

const firebaseConfig = {
    // Reach out to maintainers for the config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailLink, sendSignInLinkToEmail, isSignInWithEmailLink };
