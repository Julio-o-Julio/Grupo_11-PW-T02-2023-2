import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerFirebase = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log(user);

      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      return false;
    });
};
