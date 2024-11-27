import {app} from './firebaseConfig';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithCredential,
  createUserWithEmailAndPassword,

} from 'firebase/auth';


const auth = getAuth();

//로그인
export const signupEmail = (email, pw) => {
  return createUserWithEmailAndPassword(auth, email, pw);
};

//회원가입
export const loginEmail = (email, pw) => {
  return signInWithCredential(auth, email, pw);
};