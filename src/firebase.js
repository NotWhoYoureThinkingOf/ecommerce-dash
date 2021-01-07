import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZHQldI0T3aGRHbWhrNBflnZ-vigvHU9Y",
  authDomain: "ecommerce-dash-6966f.firebaseapp.com",
  projectId: "ecommerce-dash-6966f",
  storageBucket: "ecommerce-dash-6966f.appspot.com",
  messagingSenderId: "546658062029",
  appId: "1:546658062029:web:3e41db8aa4e96f7eaca384",
  measurementId: "G-RPR6497F4F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
