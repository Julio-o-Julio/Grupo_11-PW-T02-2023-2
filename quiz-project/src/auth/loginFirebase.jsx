import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export let loged = false;

export const loginFirebase = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log(user);
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode, errorMessage);
    return false;
  }
};
