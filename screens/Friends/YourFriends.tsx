import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import { DesignFriends } from "../../constants/svgs/Friends/DesignFriends";

const YourFriends = ({ navigation }: any) => {
  const textAnimation = useRef(new Animated.Value(1000)).current;
  const imageAnimation = useRef(new Animated.Value(1000)).current;
  const contactAnimation = useRef(new Animated.Value(1000)).current;
  const designAnimation = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(textAnimation, {
      toValue: 0,
      // duration: 1000,
      delay: 500,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
    Animated.spring(imageAnimation, {
      toValue: 0,
      delay: 2000,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
    Animated.spring(contactAnimation, {
      toValue: 0,
      delay: 3000,
      bounciness: 3,
      useNativeDriver: true,
    }).start();
    Animated.timing(designAnimation, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.design,
          {
            opacity: designAnimation.interpolate({
              inputRange: [0, 400, 500],
              outputRange: [0, 0.8, 0.85],
            }),
          },
        ]}
      >
        <DesignFriends width={700} height={700} />
      </Animated.View>

      <Animated.Text
        style={[
          styles.friendsName,
          {
            transform: [{ translateY: textAnimation }],
          },
        ]}
      >
        Daphnie Deedra
      </Animated.Text>
      <Animated.Image
        style={[
          styles.friendsPic,
          {
            transform: [{ translateY: imageAnimation }],
          },
        ]}
        source={{
          uri: "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
        }}
      />

      <Animated.View
        style={[
          styles.contact,
          {
            transform: [{ translateY: contactAnimation }],
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate("CallScreen")}>
          <Ionicons
            name="ios-call-outline"
            size={32}
            color={Colors.primary.color1}
            style={{ marginRight: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CallScreen")}>
          <Ionicons
            name="ios-videocam-outline"
            size={32}
            color={Colors.primary.color1}
            style={{ borderWidth: 1 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TextChat")}>
          <Ionicons
            name="ios-chatbox-outline"
            size={32}
            color={Colors.primary.color1}
            style={{ marginLeft: 40 }}
          />
        </TouchableOpacity>
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
  design: {
    position: "absolute",
    left: "-46%",
    top: 0,
  },
  friendsName: {
    fontFamily: Typography.family.AbrilFatface.regular,
    color: Colors.secondary.color1,
    fontSize: Typography.fontSize.Largest - 10,
    position: "absolute",
    top: "14%",
  },
  friendsPic: {
    width: 220,
    height: 220,
    borderRadius: 1000,
    position: "absolute",
    top: "28%",
  },
  contact: {
    flexDirection: "row",
    position: "absolute",
    top: "82%",
    width: "100%",
    justifyContent: "center",
  },
});

export default YourFriends;
