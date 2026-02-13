"use client";
import auth from "@/lib/firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  loader: boolean;
  setUser: (user: User | null) => void;
  setLoader: (loading: boolean) => void;
  signOutUser: () => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType | null>(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    setUser,
    setLoader,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
