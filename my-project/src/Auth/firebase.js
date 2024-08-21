// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXxL_cxun3gEuixYo-K0H_muDt7Qtn95Q",
  authDomain: "login-auth-befef.firebaseapp.com",
  projectId: "login-auth-befef",
  storageBucket: "login-auth-befef.appspot.com",
  messagingSenderId: "946419298029",
  appId: "1:946419298029:web:37940455eddb50634ba6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;