import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fbConfig = {
  apiKey: Cypress.env('API_KEY'),
  authDomain: `${Cypress.env('PROJECT_ID')}.firebaseapp.com`,
  projectId: Cypress.env('PROJECT_ID'),
  storageBucket: `${Cypress.env('PROJECT_ID')}.appspot.com`,
  messagingSenderId: Cypress.env('SENDER_ID'),
  appId: Cypress.env('APP_ID'),
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
