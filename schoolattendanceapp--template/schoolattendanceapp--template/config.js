import firebase from 'firebase'
//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyC77pM-YdCbkxgeLWvUrJf6o5L9hno1TXU",
  authDomain: "ghuyi-6563f.firebaseapp.com",
  projectId: "ghuyi-6563f",
  storageBucket: "ghuyi-6563f.appspot.com",
  messagingSenderId: "437483723273",
  appId: "1:437483723273:web:435894c38ab2d6a5c736d8",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

  export default firebase.database()
 

  