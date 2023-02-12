import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MenuBtn from "../../components/MenuBtn";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { MainDesign } from "../../constants/svgs/Community/MainDesign";
import { Ionicons } from "@expo/vector-icons";

const UniversityMenu = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const btn1 = useRef(new Animated.Value(-1200)).current;
  const btn2 = useRef(new Animated.Value(1200)).current;
  const btn3 = useRef(new Animated.Value(-1200)).current;

  const design = useRef(new Animated.Value(-2000)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.spring(btn1, {
      toValue: 0,
      delay: 3000,
      useNativeDriver: true,
    }).start();
    Animated.spring(btn2, {
      toValue: 0,
      delay: 4000,
      useNativeDriver: true,
    }).start();
    Animated.spring(btn3, {
      toValue: 0,
      delay: 5000,
      useNativeDriver: true,
    }).start();
    Animated.spring(design, {
      toValue: 0,
      delay: 1000,
      bounciness: 18,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.button1,
          {
            transform: [{ translateX: btn1 }],
          },
        ]}
      >
        <MenuBtn
          onPress={() => navigation.navigate("UniversityVideo")}
          text={"Video Lessons"}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.button2,
          {
            transform: [{ translateX: btn2 }],
          },
        ]}
      >
        <MenuBtn
          onPress={() => navigation.navigate("UniversityWritten")}
          text={"Written Lessons"}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.button3,
          {
            transform: [{ translateX: btn3 }],
          },
        ]}
      >
        <MenuBtn onPress={() => navigation.navigate("Soon")} text={"Mentors"} />
      </Animated.View>

      <Animated.View
        style={[
          styles.mainDesign,
          {
            transform: [{ translateY: design }],
          },
        ]}
      >
        <MainDesign width={Layout.width * 1.7} height={Layout.height * 2.8} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
  },
  button1: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "20%",
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "20%",
  },
  button3: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "20%",
  },
  mainDesign: {
    position: "absolute",
    top: "-120%",
    zIndex: -1000,
  },
});

export default UniversityMenu;
