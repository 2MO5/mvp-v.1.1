import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import { LinearGradient } from "expo-linear-gradient";
import { WrittenDesign } from "../../constants/svgs/University/Written";

const WrittenLesson = ({ route }) => {
  const { params } = route;
  console.log(params);

  return (
    <LinearGradient
      colors={["#00967d", "#280C3D"]}
      start={{ x: -1.75, y: 0.99 }}
      end={{ x: 2.5, y: 0.3 }}
      locations={[0.3, 1]}
    >
      <View style={styles.design}>
        <WrittenDesign width={400} height={400} />
      </View>
      <View style={styles.heading}>
        <Text style={styles.title}>{params.title}</Text>
        <Image source={{ uri: params.author }} style={styles.tutor} />
      </View>
      <ScrollView style={styles.lesson}>
        <Text style={styles.lessonText}>{params.lesson}</Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  design: {
    position: "absolute",
    top: 0,
  },
  heading: {
    height: "30%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  lesson: {
    height: "70%",
    paddingHorizontal: 20,
  },
  lessonText: {
    fontSize: 14,
    fontFamily: Typography.family.SFUIText.regular,
    color: "#ffffffa1",
    lineHeight: 20,
  },
  title: {
    fontFamily: Typography.family.Gilroy.medium,
    fontSize: Typography.fontSize.h1,
    color: Colors.primary.color1,
    marginTop: 70,
  },
  tutor: {
    width: 30,
    height: 30,
    borderRadius: 40,
    marginTop: 15,
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});

export default WrittenLesson;
