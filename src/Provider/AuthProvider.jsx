import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [emailPassUser, setEmailPassUser] = useState(null);
  // create user using email and password
  const emailPassCreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create user using google
  const googleProvider = new GoogleAuthProvider();
  const googleCreateUser = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // log out
  const logOut = () => {
    signOut(auth);
  };
  // email and password login
  const emailPassLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenstUser) => {
      console.log("auth changing", currenstUser);
      setEmailPassUser(currenstUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    emailPassCreateUser,
    logOut,
    emailPassUser,
    emailPassLogIn,
    googleCreateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
