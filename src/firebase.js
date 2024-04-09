
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAmlE3J6g6_lLEwcQVsqwxrhm26TDTmv_w",
  authDomain: "chat-41597.firebaseapp.com",
  projectId: "chat-41597",
  storageBucket: "chat-41597.appspot.com",
  messagingSenderId: "810413751740",
  appId: "1:810413751740:web:2a05a2d5dc2bbf58aa3fb9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()