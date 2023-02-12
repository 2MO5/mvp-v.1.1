import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Pressable, Animated, Easing, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../constants/Colors";
import { BtnIn } from "../../constants/svgs/MainDashboard/BtnIn";
import Typography from "../../constants/Typography";
import LottieView from "lottie-react-native";
import Layout from "../../constants/Layout";
import { Arrow } from "../../constants/svgs/MainDashboard/Arrow";
import { useRef } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import MainDashboard from "../Main/MainDashboard";
import useAuth from "../../hooks/useAuth2";

const WelcomeHome = (props) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const displayName = user.displayName;
  const name = displayName.split(" ")[0];

  const lottiePosition = useRef(new Animated.Value(-290)).current;
  const lottieOpacity = useRef(new Animated.Value(0)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;
  const welcomeAnimation = useRef(new Animated.Value(0)).current;
  const btnOpacity = useRef(new Animated.Value(0)).current;
  // const btnOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(textAnimation, {
      toValue: 400,
      duration: 12000,
      // easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
    Animated.timing(welcomeAnimation, {
      toValue: 400,
      duration: 19000,
      useNativeDriver: true,
    }).start();

    Animated.timing(btnOpacity, {
      toValue: 800,
      duration: 43000,
      useNativeDriver: true,
    }).start();

    Animated.timing(lottieOpacity, {
      toValue: 200,
      duration: 12000,
      useNativeDriver: true,
    }).start();

    Animated.timing(lottiePosition, {
      toValue: 100,
      duration: 8000,
      useNativeDriver: false,
    }).start();
  }, []);

  setTimeout(() => {
    props.navigation.navigate("MainDashboard");
  }, 18000);

  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <Animated.View
          style={[
            styles.lottieContainer,
            {
              opacity: lottieOpacity.interpolate({
                inputRange: [0, 50, 100, 120, 140, 180, 200],
                outputRange: [0.1, 0.8, 1, 0.9, 0.8, 0.7, 0],
              }),
            },
          ]}
        >
          <LottieView
            style={styles.lottieView}
            source={require("../../assets/images/maindashboard/75705-welcome-animation(1).json")}
            autoPlay={true}
            loop={true}
            // ref={(animation) => {
            //   this.animation = animation;
            // }}
          />
        </Animated.View>
        <View style={styles.textContainer}>
          <Animated.Text
            style={[
              styles.textHello,
              {
                opacity: textAnimation.interpolate({
                  inputRange: [0, 50, 100, 120, 140, 180, 200, 300, 400],
                  outputRange: [0, 0, 0, 0, 0.8, 0.8, 1, 0.5, 0],
                }),
              },
            ]}
          >
            Hello <Text style={styles.name}>{name}</Text> {"\n"}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.greeting,
              {
                opacity: welcomeAnimation.interpolate({
                  inputRange: [0, 50, 100, 120, 140, 180, 200, 300, 400],
                  outputRange: [0, 0, 0, 0, 0, 0, 0, 0, 1],
                }),
              },
            ]}
          >
            Nice to Meet You!
          </Animated.Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.block}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
    flexDirection: "column",
  },
  mainContainer: {
    width: "100%",
    height: "60%",
  },

  lottieContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "45%",
    position: "absolute",
    top: "5%",
  },

  lottieView: {
    width: Layout.width * 0.9,
    height: Layout.height * 0.9,
    marginTop: Layout.margin.margin4 - 10,
  },

  textContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "120%",
  },

  textHello: {
    fontFamily: Typography.family.Raleway.regular,
    color: Colors.tint.white,
    fontSize: Typography.fontSize.h3 + 5,
    textAlign: "center",
  },

  name: {
    fontFamily: Typography.family.CinzelDecorative.regular,
    color: Colors.primary.color1,
    fontSize: Typography.fontSize.h3 + 15,
  },

  greeting: {
    position: "absolute",
    top: "-240%",
    fontFamily: Typography.family.CinzelDecorative.regular,
    color: Colors.primary.color1,
    fontSize: Typography.fontSize.Largest + 20,
    textAlign: "center",
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
  },
  block: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeHome;
