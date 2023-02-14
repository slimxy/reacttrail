// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNgVhxooNvAjwYATBoPi8hhM4OMwqazec",
  authDomain: "movieapp-5b49a.firebaseapp.com",
  projectId: "movieapp-5b49a",
  storageBucket: "movieapp-5b49a.appspot.com",
  messagingSenderId: "249782129358",
  appId: "1:249782129358:web:444728e6b1dc9a1ee9f69f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
