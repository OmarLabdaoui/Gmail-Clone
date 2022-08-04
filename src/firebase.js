import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCO-9nEOjtkeITyRa4k127ZIuck8FYd60o",
    authDomain: "clone-ab39f.firebaseapp.com",
    projectId: "clone-ab39f",
    storageBucket: "clone-ab39f.appspot.com",
    messagingSenderId: "581821362920",
    appId: "1:581821362920:web:53ecf5b65693aef0dfcf5d",
    measurementId: "G-SS45ZN9BD2"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig)
  const db =firebase.firestore()
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider()
  export {db,auth,provider}
