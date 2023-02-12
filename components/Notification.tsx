import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import Layout from "../constants/Layout";
import { Symbol } from "../constants/svgs/MainDashboard/Symbol";
import { HeartNotification } from "../constants/svgs/MainDashboard/HeartNotification";

type NotificationProps = {
  date: string;
  action: string;
  avatar: any;
  from: any;
  type: any;
};

const Notification = ({ date, from, avatar }: NotificationProps) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  });
  return (
    <LinearGradient
      colors={[Colors.primary.color1, Colors.secondary.color2]}
      style={styles.gradientStyle}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      locations={[0.4, 0.95]}
    >
      <View style={styles.topContainer}>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: avatar }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {from} dropped a heart on your new post!
          </Text>
        </View>
        <View style={styles.notificationIcon}>
          <View style={styles.heartIcon}>
            <HeartNotification width={15} height={15} />
          </View>

          <Symbol width={40} height={40} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    height: "70%",
    width: "93%",
    borderRadius: 25,
    elevation: 90,
  },

  topContainer: {
    height: "25%",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 8,
    paddingLeft: 15,
  },

  dateTextContainer: {
    backgroundColor: Colors.background.color1,
    elevation: 10,
    width: "20%",
    height: "80%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  dateText: {
    fontFamily: Typography.family.AbrilFatface.regular,
    fontSize: Typography.fontSize.h3 - 5,
    paddingHorizontal: 8,
    color: Colors.primary.color1,
  },
  bottomContainer: {
    height: "75%",
    width: "100%",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
  },

  imageContainer: {
    width: "20%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: Layout.height > 545 ? 40 : 35,
    height: 41,
    borderRadius: 100,
    marginRight: 5,
  },

  textContainer: {
    width: "65%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: Typography.family.Raleway.regular,
  },

  notificationIcon: {
    width: "20%",
    height: "90%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft: 10,
  },

  heartIcon: {
    position: "absolute",
    top: "37%",
    right: "18%",
    zIndex: 1000,
  },
});

export default Notification;
