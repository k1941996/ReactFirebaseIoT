import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "#config/firebase";

import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [userDetails, setUserDetails] = useState(null);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUserDetails(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user: userDetails, signInWithGoogle, logOut }}>{children}</AuthContext.Provider>
    </>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
