import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCAtDgk_87t8UGWw8FpDRZ3tJHI1urBW4s",
  authDomain: "hinampangsysresult.firebaseapp.com",
  projectId: "hinampangsysresult",
  storageBucket: "hinampangsysresult.firebasestorage.app",
  messagingSenderId: "610207914732",
  appId: "1:610207914732:web:8a7d253627aaf42f5d63c9",
  measurementId: "G-5MPNCBG5JB"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);