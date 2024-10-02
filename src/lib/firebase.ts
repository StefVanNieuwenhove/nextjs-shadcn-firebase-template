// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDghndgtq8fD9wWE4GQMTv_cLmML5cKIkM',
  authDomain: 'nextjs-shadcn-firebase-templat.firebaseapp.com',
  projectId: 'nextjs-shadcn-firebase-templat',
  storageBucket: 'nextjs-shadcn-firebase-templat.appspot.com',
  messagingSenderId: '80120796335',
  appId: '1:80120796335:web:c84e910bb8764f45b4705a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firebase Firestore
export const db = getFirestore(app);
