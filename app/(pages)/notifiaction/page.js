// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkK3bE8kOE34s_eQzy2zK-4B3fjBz-Dj0",
  authDomain: "push-notification-31752.firebaseapp.com",
  projectId: "push-notification-31752",
  storageBucket: "push-notification-31752.appspot.com",
  messagingSenderId: "510445993987",
  appId: "1:510445993987:web:c8cfd803866d639f2e8e36",
  measurementId: "G-6YFRLED3PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);