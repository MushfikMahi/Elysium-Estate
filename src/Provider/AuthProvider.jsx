import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user using email and password
  const emailPassCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create user using GitHub
  const gitHubProvider = new GithubAuthProvider();
  const gitHubCreateUser = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // create user using google
  const googleProvider = new GoogleAuthProvider();
  const googleCreateUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // log out
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  // email and password login
  const emailPassLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth changing", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const updateUser = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    emailPassCreateUser,
    logOut,
    user,
    emailPassLogIn,
    googleCreateUser,
    gitHubCreateUser,
    loading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
