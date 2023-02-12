import React from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Typography from "../constants/Typography";

interface ButtonProps {
  buttonContainerStyle?: any;
  label?: string;
  colors?: string[];
  disabled?: boolean;
  labelStyle?: any;
  width?: string;
  height?: number;
  color1?: string;
  color2?: string;
  onPress?: any;
}

const TextButton = ({
  buttonContainerStyle,
  label,
  disabled,
  labelStyle,
  onPress,
  width,
  height,
  colors,
  color1,
  color2,
}: ButtonProps) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.btnTouchable,
          {
            ...buttonContainerStyle,
          },
        ]}
      >
        <LinearGradient
          colors={[`${color1}`, `${color2}`]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.btnTextLabel,
            {
              width: width,
              height: height,
            },
          ]}
        >
          <Text
            style={[
              styles.labelText,
              {
                ...labelStyle,
              },
            ]}
          >
            {label}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "101%",
    height: 100,
    paddingHorizontal: Layout.padding.padding2 - 3,
    marginTop: Layout.margin.margin4 - 10,
  },

  btnTouchable: {
    paddingHorizontal: Layout.padding.padding2,
    justifyContent: "center",
    alignItems: "center",
  },

  btnTextLabel: {
    maxHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Layout.margin.margin1,
  },

  labelText: {
    color: Colors.background.variation1,
    fontFamily: Typography.family.Raleway.bold,
    fontSize: Typography.fontSize.h3,
  },
});

export default TextButton;
