import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsH7Sn8CuwD-TFmvRI2DZkDLNPQomh4E8",
  authDomain: "dragonherd-24f6b.firebaseapp.com",
  projectId: "dragonherd-24f6b",
  storageBucket: "dragonherd-24f6b.appspot.com",
  messagingSenderId: "550699998649",
  appId: "1:550699998649:web:1c7dbf92638924d9032a68"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);