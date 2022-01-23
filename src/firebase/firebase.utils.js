import { initializeApp, getAnalytics } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDQjxOxBIwtzbN_lldPgKd7q-8onO2n5nM',
  authDomain: 'clothing-db-871ae.firebaseapp.com',
  projectId: 'clothing-db-871ae',
  storageBucket: 'clothing-db-871ae.appspot.com',
  messagingSenderId: '1005493480529',
  appId: '1:1005493480529:web:239950129a5b43bb1d1c70',
  measurementId: 'G-54HL6TXQSM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
