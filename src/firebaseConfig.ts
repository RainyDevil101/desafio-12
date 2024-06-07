// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth/cordova';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmKZsgvt36Ew1lp7bITG0v_J9kTvOponM',
  authDomain: 'dia-12-cf63b.firebaseapp.com',
  projectId: 'dia-12-cf63b',
  storageBucket: 'dia-12-cf63b.appspot.com',
  messagingSenderId: '412890330552',
  appId: '1:412890330552:web:f461571885e0523374cb4d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
