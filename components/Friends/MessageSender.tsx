import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";

const MessageSender = ({ text }) => {
  return (
    <View style={styles.main}>
      <View style={styles.detailsContainer}>
        <Text style={styles.timestamp}>12:32</Text>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "flex-end",
    maxWidth: "50%",
    minWidth: "10%",
    maxHeight: "190%",
    marginTop: 25,
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: "45%",
    marginRight: "5%",
    borderRadius: 12,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#006B59",
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
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h5,
    color: Colors.primary.color1,

    textAlign: "left",
  },
});

export default MessageSender;
