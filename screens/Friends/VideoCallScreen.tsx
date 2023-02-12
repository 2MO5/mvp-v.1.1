import { View, Text } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";

const VideoCallScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}></View>
      <View style={styles.mainContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: Colors.background.color1 },
  container: { width: "100%", height: "83%" },
  mainContainer: {
    width: "80%",
    height: "12%",
    borderRadius: 20,
    backgroundColor: "#ffffff2c",
    marginHorizontal: "10%",
  },
});

export default VideoCallScreen;
