import React, { useRef, useEffect } from "react";
import {
  Image,
  View,
  Text,
  Button,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import Layout from "../../constants/Layout";
import useAuth from "../../hooks/useAuth2";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const opacityBtn = useRef(new Animated.Value(0)).current;
  const btnPosition = useRef(new Animated.Value(0)).current;

  const { signInWithGoogle, loading, user } = useAuth();

  useEffect(() => {
    console.log("loading is ", loading, "user is ", user);

    Animated.timing(opacity, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityBtn, {
      toValue: 100,
      duration: 25000,
      useNativeDriver: true,
    }).start();

    Animated.timing(btnPosition, {
      toValue: 100,
      duration: 25000,
      useNativeDriver: false,
    }).start();
  });

  function renderLogo() {
    return (
      <Animated.View
        style={[
          styles.logoMainContainer,
          {
            opacity: opacity.interpolate({
              inputRange: [0, 50, 100],
              outputRange: [0, 0.6, 1],
            }),
          },
        ]}
      >
        {loading && !user ? (
          <Image
            style={styles.logoImage}
            source={require("../../assets/images/onboarding/logoCenter.png")}
          />
        ) : (
          <LottieView
            style={styles.lottieView}
            source={require("../../assets/images/maindashboard/99274-loading.json")}
            autoPlay={true}
            loop={true}
          />
        )}
      </Animated.View>
    );
  }

  function renderButtons() {
    return (
      <Animated.View
        style={[
          styles.btnMainContainer,
          {
            opacity: opacityBtn.interpolate({
              inputRange: [0, 50, 100],
              outputRange: [0, 0.6, 1],
            }),
          },
        ]}
      >
        {loading && !user ? (
          <TouchableOpacity
            onPress={signInWithGoogle}
            style={styles.googleTouchable}
          >
            <View style={styles.googleContainer}>
              <Image
                source={require("../../assets/images/onboarding/google.png")}
                style={styles.googleImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Get In With Google</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </Animated.View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, position: "relative" }}
        resizeMode="cover"
        source={require("../../assets/images/onboarding/bgM.png")}
      >
        {renderLogo()}
        {renderButtons()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  //logo
  logoMainContainer: {
    width: Layout.height < 545 ? "100%" : "124%",
    height: Layout.height < 545 ? "70%" : "76%",
    paddingLeft: Layout.height < 545 ? 0 : -340,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "32%",
    height: "50%",
    marginRight: Layout.height < 545 ? 0 : 100,
  },
  lottieView: {
    width: Layout.width * 0.9,
    height: Layout.height * 0.9,
    marginTop: Layout.margin.margin4 - 15,
    marginRight: Layout.height < 545 ? 0 : 100,
  },
  //buttons

  btnMainContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  googleTouchable: {
    backgroundColor: "transparent",
    borderColor: Colors.tint.white,
    borderWidth: 1,
    borderRadius: 60,
    height: 55,
    width: "80%",
    flexDirection: "row",
  },
  googleContainer: {
    width: "30%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: Layout.height < 545 ? 0 : -2,
    marginLeft: Layout.width < 545 ? 0 : -10,
  },
  googleImage: {
    width: "30%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: Layout.height < 545 ? 0 : -2,
    marginLeft: Layout.width < 545 ? 0 : -10,
  },
  textContainer: {
    width: "70%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  text: {
    fontFamily: Typography.family.Raleway.medium,
    fontSize:
      Layout.height < 545 ? Typography.fontSize.h3 : Typography.fontSize.h3 - 3,
    color: Colors.tint.white,
  },
});

export default RegisterScreen;
