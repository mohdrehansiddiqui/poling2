import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup
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


let login = document.getElementById("login-btn");

login.addEventListener("click", () => {
  let email = document.getElementById("lemail").value;
  let password = document.getElementById("lpass").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
      window.location.href = '../index.html'
    })
    .catch((error) => {
      console.log(error);
    });
});

const Fblogin = document.getElementById('fg-login')

Fblogin.addEventListener('click',()=>{
    const provider = new FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
        'display': 'popup'
      });
      signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(user,credential,accessToken)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential)
  });
})