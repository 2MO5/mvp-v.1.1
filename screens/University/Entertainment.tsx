import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";

const Entertainment = () => {
  const textAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(textAnimation, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={styles.main}>
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: textAnimation.interpolate({
              inputRange: [0, 90, 100],
              outputRange: [0, 0.7, 1],
            }),
          },
        ]}
      >
        Coming Soon
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
    paddingHorizontal: 10,
  },

  text: {
    color: Colors.tint.white,
    fontFamily: Typography.family.CinzelDecorative.regular,
    fontSize: Typography.fontSize.Largest - 10,
  },
});

export default Entertainment;
