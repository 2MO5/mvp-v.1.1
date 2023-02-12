import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";

const MenuBtn = ({ text, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "80%",
    height: "40%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.primary.color1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-15%",
  },
  btnText: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h2 - 5,
    color: Colors.primary.color1,
  },
});

export default MenuBtn;
