import { View, Text } from "react-native";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import envVariables from "../config/env";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "839111273642-iu9808qjeau5pfd8evsun15m88bcfi36.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export function AuthProvider({ children }) {
  console.log(envVariables);

  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      // {
      //  const unsub= onAuthStateChanged(auth, (user) => {
      //     if (user) {
      //       //logged in
      //       setUser(user);
      //     } else {
      //       //not logged in
      //       setUser(null);
      //     }

      //     setLoadingInitial(false);
      //   });

      //   return unsub();

      //direct return a handy way of doing the clean up
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //logged in
          setUser(user);
        } else {
          //not logged in
          setUser(null);
        }

        setLoadingInitial(false);
      }),
    []
  );

  const logout = () => {
    setLoading(true);

    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = async () => {
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        console.log(logInResult);
        if (logInResult.type === "success") {
          //login..
          const { idToken, accessToken } = logInResult;
          //creating the object that's to be passed to the firebase
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );

          await signInWithCredential(auth, credential);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user: user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error]
  ); //only render if <== theese change

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
