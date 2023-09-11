
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtyOGXDrZt1oXHHLjmXWXjDYuc1znIMxg",
  authDomain: "mrdamarkoreactcv.firebaseapp.com",
  projectId: "mrdamarkoreactcv",
  storageBucket: "mrdamarkoreactcv.appspot.com",
  messagingSenderId: "996163181609",
  appId: "1:996163181609:web:9f3a63441a7cee45365038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

