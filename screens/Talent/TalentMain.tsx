import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const TalentMain = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={{ color: "#fff" }}>Talent Main</Text>
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

export default TalentMain;
