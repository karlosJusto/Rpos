// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDSvMMAxGusgi0qMdxbNNYvxsikAbtlW4",
  authDomain: "sprpos-f405c.firebaseapp.com",
  projectId: "sprpos-f405c",
  storageBucket: "sprpos-f405c.appspot.com",
  messagingSenderId: "331336984495",
  appId: "1:331336984495:web:a953bc42cd6e7c6671b15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);