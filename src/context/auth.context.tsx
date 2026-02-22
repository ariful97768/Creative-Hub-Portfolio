"use client";
import auth from "@/lib/firebase.config";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
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
  signInWithEmailPassword: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<UserCredential>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const signInWithEmailPassword = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
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
    signInWithEmailPassword,
    resetPassword,
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
