import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCS6Z4fCchasKPr2SmK2Xhl9UGqBJmHd6g",
  authDomain: "libossart-react-app.firebaseapp.com",
  projectId: "libossart-react-app",
  storageBucket: "libossart-react-app.appspot.com",
  messagingSenderId: "491034385775",
  appId: "1:491034385775:web:4dad3a12556ab2f157dc9a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)