import firebase from 'firebase/app';
import 'firebase/firestore'

const DB_CONFIG = firebase.initializeApp({
  apiKey: 'AIzaSyCeeQnKHS0tQOcgYpnF1XsJVWxfNOz9Doc',
  authDomain: 'todo-app-7351a.firebaseapp.com',
  databaseURL: 'https://todo-app-7351a.firebaseio.com',
  projectId: 'todo-app-7351a',
  storageBucket: 'todo-app-7351a.appspot.com',
  messagingSenderId: '190026019293',
  appId: '1:190026019293:web:8501fcda9956b8298a0634'
});

export { DB_CONFIG as firebase}
