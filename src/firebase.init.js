// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfj1UfJODz4x8euMl3bk2zBmNjHr0QNvk",
  authDomain: "simple-web-authentication.firebaseapp.com",
  projectId: "simple-web-authentication",
  storageBucket: "simple-web-authentication.appspot.com",
  messagingSenderId: "733406995385",
  appId: "1:733406995385:web:16462338bffe06d1704c68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;