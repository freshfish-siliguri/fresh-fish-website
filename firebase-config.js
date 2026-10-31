
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDytC6VviCMPN7cyZtGWoyf-G4nsDso-Qw",
  authDomain: "fresh-fish-siliguri.firebaseapp.com",
  projectId: "fresh-fish-siliguri",
  storageBucket: "fresh-fish-siliguri.firebasestorage.app",
  messagingSenderId: "83162926459",
  appId: "1:83162926459:web:f9e472ee5e2b1b06d881de"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
