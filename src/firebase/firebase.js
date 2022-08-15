import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_NEWS_API
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;