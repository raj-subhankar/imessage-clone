import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDMwOjJLPiNh8tKFu9vv2sja1qZ7kNvGMc",
    authDomain: "imessage-clone-40d89.firebaseapp.com",
    projectId: "imessage-clone-40d89",
    storageBucket: "imessage-clone-40d89.appspot.com",
    messagingSenderId: "986544974973",
    appId: "1:986544974973:web:b99ed9be805afa7f7a1514"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db
