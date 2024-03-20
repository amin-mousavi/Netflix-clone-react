// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeFTi1X786-IYTSt_Otn34YfjGmV3llD0",
  authDomain: "netflix-react-4f615.firebaseapp.com",
  projectId: "netflix-react-4f615",
  storageBucket: "netflix-react-4f615.appspot.com",
  messagingSenderId: "187514405687",
  appId: "1:187514405687:web:36185735c4a5259ef2d0b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
