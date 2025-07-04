
import { initializeApp,getApp,getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBiMmlJwMmBOWMZpjWDHPgriOswcsy9Sx4",
  authDomain: "preppilot-fa8ad.firebaseapp.com",
  projectId: "preppilot-fa8ad",
  storageBucket: "preppilot-fa8ad.firebasestorage.app",
  messagingSenderId: "552169150952",
  appId: "1:552169150952:web:4a9ed00ee898a21ec1ec5d",
  measurementId: "G-VFL8HRGEKP"
};


const app = !getApps.length?initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);