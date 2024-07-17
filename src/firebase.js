import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN4IsVOOGRDoeqnTWAPX1INtDSERmBUXM",
  authDomain: "whatsapp-clone-424210.firebaseapp.com",
  projectId: "whatsapp-clone-424210",
  storageBucket: "whatsapp-clone-424210.appspot.com",
  messagingSenderId: "197083120782",
  appId: "1:197083120782:web:00ba0151f1a009e8c3b5df",
  measurementId: "G-02L30JBDWM"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db