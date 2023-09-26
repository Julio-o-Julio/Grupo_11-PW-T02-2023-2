import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_2rqOM1OYAvYKZvkZp-yELGqzcjflEPU",
  authDomain: "crud-react-teste-1.firebaseapp.com",
  projectId: "crud-react-teste-1",
  storageBucket: "crud-react-teste-1.appspot.com",
  messagingSenderId: "824948978890",
  appId: "1:824948978890:web:8ed85307d708756b457033",
  measurementId: "G-3FM45R10JC",
};

const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase);
