import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDWmWE7w053xjQQgTmm3k7CajWUDrTX34E',
  authDomain: 'pidz-platform.firebaseapp.com',
  databaseURL: 'https://pidz-platform.firebaseio.com',
  projectId: 'pidz-platform',
  storageBucket: 'pidz-platform.appspot.com',
  messagingSenderId: '360656258095',
  appId: '1:360656258095:web:059c0af9ba2fff5249b2da',
  measurementId: 'G-JRTF447PP1',
};

firebase.initializeApp(firebaseConfig);
