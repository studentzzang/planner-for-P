import {app} from './firebaseConfig';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithCredential,
  createUserWithEmailAndPassword,

} from 'firebase/auth';


const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};