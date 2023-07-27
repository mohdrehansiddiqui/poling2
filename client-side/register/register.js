import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAgi2ZN1VSMNXIAvVzkWNt0rTeXgaqsq1U",
  authDomain: "hekathon-practice.firebaseapp.com",
  projectId: "hekathon-practice",
  storageBucket: "hekathon-practice.appspot.com",
  messagingSenderId: "280785919765",
  appId: "1:280785919765:web:11d190b7bd2c307d60531c",
  measurementId: "G-XNJC5HD9T8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signup = document.getElementById("signup-btn");

signup.addEventListener("click", () => {
  let email = document.getElementById("semail").value;
  let password = document.getElementById("spass").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
      window.location.href = '../index.html'
    })
    .catch((error) => {
      console.log(error);
    });
});