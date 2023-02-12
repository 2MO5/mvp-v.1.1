import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import { MainPattern } from "../../constants/svgs/MainDashboard/MainPattern";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import MainDashboardCard from "../../components/MainDaashboardCard";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth2";

const MainDashboard = ({ navigation }) => {
  const [menuOn, setMenuOn] = React.useState(false);
  const { user } = useAuth();

  const patternAnimation = useRef(new Animated.Value(0)).current;
  const cardAnimation = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(cardAnimation, {
      toValue: 0,
      duration: 4000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
    Animated.timing(patternAnimation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      console.warn("Dude!!");
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      <Header />

      <View style={styles.container}>
        <Animated.View
          style={[
            styles.pattern,
            {
              opacity: patternAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
            },
          ]}
        >
          <MainPattern
            width={Layout.width * 1.2}
            height={Layout.height * 1.2}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.cardView,
            {
              transform: [{ translateY: cardAnimation }],
            },
          ]}
        >
          <MainDashboardCard />
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
  container: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  pattern: {
    width: "120%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: "-10%",
    top: "-2%",
  },
  cardView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12%",
  },
});

export default MainDashboard;
