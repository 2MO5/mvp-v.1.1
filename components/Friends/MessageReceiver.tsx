import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";

const MessageReceiver = ({ avatar, text }) => {
  return (
    <View style={styles.main}>
      <View style={styles.userDetails}>
        <Image source={{ uri: avatar }} style={styles.userImage} />
        <Text style={styles.timestamp}>12:32</Text>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "baseline",
    maxWidth: "60%",
    minWidth: "10%",
    maxHeight: "190%",
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 20,
    borderRadius: 12,
  },
  userDetails: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: Colors.primary.color1,
  },
  userImage: {
    width: 15,
    height: 15,
    borderRadius: 100,
    position: "absolute",
    top: -5,
    left: 5,
  },
  timestamp: {
    position: "absolute",
    top: -11,
    right: 5,
    color: "#ffffff57",
    fontSize: 8,
    fontFamily: Typography.family.Raleway.regular,
  },
  message: {
    fontFamily: Typography.family.Raleway.medium,
    fontSize: Typography.fontSize.h5,
    color: Colors.background.color1,
  },
});

export default MessageReceiver;
