// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJ-N7w_R1Q7l9s4wXE0TbS9DPH9FXe1HI',
  authDomain: 'u-shop-84196.firebaseapp.com',
  projectId: 'u-shop-84196',
  storageBucket: 'u-shop-84196.appspot.com',
  messagingSenderId: '79697228939',
  appId: '1:79697228939:web:0717490bf8529490a4908e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
