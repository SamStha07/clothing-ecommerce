import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  console.log('snapshot', snapshot);

  // if logged in user doesnot exists on db then will create i.e snapshot.exists=false
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
