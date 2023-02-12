import React, { useState, useEffect, useContext, createContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";

import { auth } from "../utils/firebase";

const AuthContext = createContext({});

const config = {
  clientId:
    "839111273642-p4lctbtvqm8imv8d4rc90o9i1g5uv0mp.apps.googleusercontent.com",
  redirectUri: "https://auth.expo.io/@don27/EnglishHUBLiVE",
  responseType: "id_token",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  const [request, response, promptAsync] = Google.useAuthRequest(config);

  //for the response
  useEffect(() => {
    if (response?.type === "success") {
      console.log("Successfull response!");
      console.log("@49 response: ", JSON.stringify(response));

      const { id_token } = response.params;
      console.log("@54 idToken: ", id_token);

      setToken(id_token);
      console.log("@54 token: ", token);

      if (response) {
        firebaseWorking(id_token);
        setLoading(false);
      }
    }
  }, [response]);

  //for the firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  });

  //google sign in
  async function signInWithGoogle() {
    console.log("@signInWithGoogle");
    WebBrowser.maybeCompleteAuthSession();

    const theRequest = JSON.stringify(request);
    console.log("request: ", theRequest);
    console.log("response: ", JSON.stringify(response));

    promptAsync({ useProxy: true, showInRecents: true });
  }

  //firebase workings
  async function firebaseWorking(idToken: any) {
    console.log("@79: ", idToken);

    try {
      console.log("@80 Just before credential ");
      const credential = GoogleAuthProvider.credential(idToken);
      signInWithCredential(auth, credential);
      console.log("@credential ", credential);
    } catch (error) {
      console.log("error @firebase: ", error);
    }
  }

  //log out
  async function logout() {
    signOut(auth).catch((error) => setError(error));
    setToken(null);
    setUser(null);
    setLoading(true);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signInWithGoogle,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
