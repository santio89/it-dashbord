import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6DJ_GWKy6DjCzWQ2bL18dhufvluNAOjI",
  authDomain: "it-dashboard-80ca7.firebaseapp.com",
  projectId: "it-dashboard-80ca7",
  storageBucket: "it-dashboard-80ca7.appspot.com",
  messagingSenderId: "877098600271",
  appId: "1:877098600271:web:acd80ff360126d2e5c273a"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseGoogleProvider = new GoogleAuthProvider();
export const firebaseDb = getFirestore(firebaseApp)
export const timestamp = serverTimestamp()