import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhlxm_UHgT2lJUhkJZhfl7tjZP6dxFDDQ",
  authDomain: "movie-project-99517.firebaseapp.com",
  projectId: "movie-project-99517",
  storageBucket: "movie-project-99517.appspot.com",
  messagingSenderId: "352893726193",
  appId: "1:352893726193:web:8480514ab1f01c624ea850",
  measurementId: "G-GXBJMJ8V9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
