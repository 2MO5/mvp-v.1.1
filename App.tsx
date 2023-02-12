import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { useFonts } from "expo-font";
import { AuthProvider } from "./hooks/useAuth2";
import { GestureHandlerRootView } from "react-native-gesture-handler";
/* ... */

// import { AuthProvider } from "./assets/images/onboarding/"
// import { StatusBar } from "expo-status-bar";
export default function App() {
  const [loaded] = useFonts({
    "AbrilFatface-Regular": require("./assets/fonts/AbrilFatface-Regular.ttf"),
    "CinzelDecorative-Regular": require("./assets/fonts/CinzelDecorative-Regular.ttf"),
    "Satisfy-Regular": require("./assets/fonts/Satisfy-Regular.ttf"),

    "Raleway-Black": require("./assets/fonts/Raleway-Black.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),

    "Gilroy-Heavy": require("./assets/fonts/Gilroy-Heavy.ttf"),
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Light": require("./assets/fonts/Gilroy-Light.ttf"),

    "SFUIText-Heavy": require("./assets/fonts/SFUIText-Heavy.ttf"),
    "SFUIText-Bold": require("./assets/fonts/SFUIText-Bold.ttf"),
    "SFUIText-Medium": require("./assets/fonts/SFUIText-Medium.ttf"),
    "SFUIText-Regular": require("./assets/fonts/SFUIText-Regular.ttf"),
    "SFUIText-Light": require("./assets/fonts/SFUIText-Light.ttf"),

    "ink-free": require("./assets/fonts/Ink-Free.ttf"),
  });

  if (!loaded) {
    return null;
  }

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar hidden={true} />
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
