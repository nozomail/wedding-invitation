import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.ROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
});

export const auth = firebase.auth();
export const database = firebase.firestore();
