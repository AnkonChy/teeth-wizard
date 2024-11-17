import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
import auth from "../../firebase/firebase.config";

const AuthProvider = ({ routes }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogout = () => {
    return signOut(auth);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{routes}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
