// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4vCARJfLLEDohEvMYVXuLWnwGO2d20z4',
  authDomain: 'expensify-b37b7.firebaseapp.com',
  projectId: 'expensify-b37b7',
  storageBucket: 'expensify-b37b7.appspot.com',
  messagingSenderId: '909549198944',
  appId: '1:909549198944:web:6aedeae55fc7e6ad56ed05',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth();

export { app, auth };
