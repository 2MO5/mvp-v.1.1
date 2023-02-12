import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const TalentUpload = () => {
  return (
    <View style={styles.main}>
      <Text style={{ color: "#fff" }}>Talent Upload</Text>
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
});

export default TalentUpload;
