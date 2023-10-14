import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const registerFirebase = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return user.uid;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode, errorMessage);
    return false;
  }
};
