import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBeftnKeSXl-DRJV_DUU9zHwv918zlunko",
  authDomain: "fir-app-33c40.firebaseapp.com",
  projectId: "fir-app-33c40",
  storageBucket: "fir-app-33c40.appspot.com",
  messagingSenderId: "193130986215",
  appId: "1:193130986215:web:de524f06ff52e04a6e8042",
  measurementId: "G-YH7N7XDHRS"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
