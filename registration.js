// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5nOVPUjo5uDzwouzvw8H5Eb5OGKbjIW0",
  authDomain: "daizy-blog-app.firebaseapp.com",
  projectId: "daizy-blog-app",
  storageBucket: "daizy-blog-app.appspot.com",
  messagingSenderId: "782836556558",
  appId: "1:782836556558:web:acbe15fbb92b21020c6d5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const confirmPassword = document.querySelector("#confirmPassword");
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userDetails) => {
      const user = userDetails.user;
      console.log("User signed in:", user);
      alert("User created successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in error:", errorMessage);
    });
});
