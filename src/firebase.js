// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDrTIhazQODPkR-eK1pRVvZQamPog4JzYo",
    authDomain: "netflixx-9a066.firebaseapp.com",
    projectId: "netflixx-9a066",
    storageBucket: "netflixx-9a066.appspot.com",
    messagingSenderId: "107705805163",
    appId: "1:107705805163:web:8b3398743b26e6624c842e",
    measurementId: "G-K0NPGP8TB3"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore;
  const auth=firebaseApp.auth();

  export {auth};
  export default db;