import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import LottieView from "lottie-react-native";
import Layout from "../../constants/Layout";
import Typography from "../../constants/Typography";
import { Arrow } from "../../constants/svgs/MainDashboard/Arrow";

const TalentDashboard = ({ navigation }) => {
  const textAnimation = useRef(new Animated.Value(0)).current;
  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const lottiePosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(arrowAnimation, {
      toValue: 200,
      duration: 15000,
      useNativeDriver: true,
    }).start();
    Animated.timing(textAnimation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    Animated.spring(lottiePosition, {
      toValue: 100,
      // duration: 5000,
      delay: 10,
      bounciness: 90,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.lottieView,
          {
            top: lottiePosition.interpolate({
              inputRange: [0, 100],
              outputRange: [-90, 1],
            }),
          },
        ]}
      >
        <LottieView
          style={styles.lottie}
          source={require("../../assets/images/maindashboard/dance.json")}
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
            styles.text,
            {
              opacity: textAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
            },
          ]}
        >
          Unleash Yourself and{" "}
          <Text style={styles.textSpan}>{"\n"} Expand</Text> Your Horizons
        </Animated.Text>
        <Animated.View
          style={[
            styles.navigationContainer,
            {
              opacity: arrowAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
            },
          ]}
        >
          <TouchableOpacity onPress={() => navigation.navigate("TalentMenu")}>
            <Arrow width={30} height={40} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: Colors.background.color1,
  },

  lottieView: {
    position: "relative",

    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  lottie: {
    width: Layout.width * 0.4,
    height: Layout.height * 0.4,
  },

  textContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontFamily: Typography.family.Raleway.regular,
    color: Colors.tint.white,
    fontSize: Typography.fontSize.h3 + 5,
    textAlign: "center",
    lineHeight: Typography.lineHeight.height1,
  },
  textSpan: {
    fontFamily: Typography.family.Raleway.regular,
    color: Colors.primary.color1,
    fontSize: Typography.fontSize.h3 + 7,
  },
  navigationContainer: {
    marginTop: 50,
  },
});

export default TalentDashboard;
