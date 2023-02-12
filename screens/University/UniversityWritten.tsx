import React, { useEffect, useRef } from "react";
import { View, Text, FlatList, Animated, StyleSheet } from "react-native";
import WrittenLesson from "../../components/WrittenLesson";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import lessons from "../../dummyData/lessons";
import { LinearGradient } from "expo-linear-gradient";

const UniversityWritten = () => {
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
      colors={["#00967da5", "#280C3D"]}
      start={{ x: -1.75, y: 0.99 }}
      end={{ x: 2.5, y: 0.3 }}
      locations={[0.3, 1]}
      style={styles.linearGradient}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={lessons}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <Animated.View
              style={[
                styles.videoList,
                {
                  opacity,
                },
              ]}
            >
              <WrittenLesson
                title={item.title}
                lesson={item.description}
                author={item.avatar}
              />
            </Animated.View>
          );
        }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  videoList: {
    flex: 1,
    height: Layout.height * 0.35,
    paddingLeft: 20,
  },
});

export default UniversityWritten;
