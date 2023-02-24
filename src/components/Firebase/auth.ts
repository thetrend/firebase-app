import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from '@firebase/auth';
import { auth } from './firebase';

const errorMessage = (error: { code: any; message: any; }) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  return {
    errorCode,
    errorMessage
  };
};

const createUser = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch(error => errorMessage(error));

const signInUser = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential => {
    const user = userCredential.user;
  }))
  .catch(error => errorMessage(error));

const signOutUser = () => auth.signOut()
  .then(() => {
    // Signout successful.
  })
  .catch(error => errorMessage(error));

const passwordReset = (email: string) => sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent 
  })
  .catch(error => errorMessage(error));

const passwordUpdate = (password: string) => updatePassword(auth.currentUser!, password)
  .then(() => {
    // Update successful
  })
  .catch(error => errorMessage(error));

export { createUser, signInUser, signOutUser, passwordReset, passwordUpdate };