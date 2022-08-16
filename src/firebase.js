// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCMYxNV2bC9VoP117ZHCuolK6ZP9sRm3Zo",

  authDomain: "lyric-generator-app-2edb0.firebaseapp.com",

  databaseURL: "https://lyric-generator-app-2edb0-default-rtdb.firebaseio.com",

  projectId: "lyric-generator-app-2edb0",

  storageBucket: "lyric-generator-app-2edb0.appspot.com",

  messagingSenderId: "440887239093",

  appId: "1:440887239093:web:63f3acd78056f94ff5b9fc"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default firebase;