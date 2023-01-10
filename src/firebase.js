import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrsl29blLQ4zrxJwVxDQ_UkXLeXHx-wac",
    authDomain: "linkedin-clone-e1cd4.firebaseapp.com",
    projectId: "linkedin-clone-e1cd4",
    storageBucket: "linkedin-clone-e1cd4.appspot.com",
    messagingSenderId: "158540889102",
    appId: "1:158540889102:web:ff9d1c154b4be0777a105f",
    measurementId: "G-C5RH3XQDTF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
