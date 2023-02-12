import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Typography from "../constants/Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  lesson: string;
  author: string;
  likes: number;
  comments: number;
  postedOn: string;
}

const WrittenLesson = ({ title, lesson, author }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("WrittenLesson", {
          title: title,
          lesson: lesson,
          author: author,
        })
      }
      style={styles.main}
    >
      <LinearGradient
        colors={["#00967ddf", "#280C3D"]}
        start={{ x: -1.75, y: 0.99 }}
        end={{ x: 2.5, y: 0.3 }}
        locations={[0.3, 1]}
        style={styles.styleDot1}
      ></LinearGradient>
      <LinearGradient
        colors={["#00967ddf", "#280C3D"]}
        start={{ x: -1.75, y: 0.99 }}
        end={{ x: 2.5, y: 0.3 }}
        locations={[0.3, 1]}
        style={styles.styleDot2}
      ></LinearGradient>
      <LinearGradient
        colors={["#00967ddf", "#280C3D"]}
        start={{ x: -1.75, y: 0.99 }}
        end={{ x: 2.5, y: 0.3 }}
        locations={[0.3, 1]}
        style={styles.styleDot3}
      ></LinearGradient>
      <LinearGradient
        colors={["#00967ddf", "#280C3D"]}
        start={{ x: -1.75, y: 0.99 }}
        end={{ x: 2.5, y: 0.3 }}
        locations={[0.3, 1]}
        style={styles.styleDot4}
      ></LinearGradient>
      <View style={styles.mainLessonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.lessonContainer}>
          <Text style={styles.lesson}>{lesson}</Text>
        </View>
      </View>
      <LinearGradient
        colors={["#00967ddf", "#280C3D"]}
        start={{ x: -1.75, y: 0.99 }}
        end={{ x: 2.5, y: 0.3 }}
        locations={[0.3, 1]}
        style={styles.authorContainer}
      >
        <Image source={{ uri: author }} style={styles.author} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "95%",
    height: 225,
    marginBottom: 50,
    marginTop: 10,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: "row",
    elevation: 15,
  },
  styleDot1: {
    width: 80,
    height: 1.5,
    borderRadius: 20,
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
    elevation: 15,
  },

  styleDot2: {
    width: 30,
    height: 30,
    borderRadius: 20,
    position: "absolute",
    bottom: 3,
    right: 5,
    zIndex: 10,
    elevation: 15,
  },
  styleDot3: {
    width: 20,
    height: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: 3,
    right: 3,
    zIndex: 10,
    elevation: 15,
  },
  styleDot4: {
    width: 120,
    height: 120,
    borderRadius: 120,
    position: "absolute",
    top: -40,
    left: -20,
    zIndex: 10,
    elevation: 15,
    opacity: 0.07,
  },

  mainLessonContainer: {
    width: "70%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: Colors.secondary.color1,
    flexDirection: "column",
  },

  textContainer: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
    paddingLeft: 13,
  },

  titleText: {
    fontFamily: Typography.family.CinzelDecorative.regular,
    fontSize: Typography.fontSize.h4,
  },

  lessonContainer: {
    width: "100%",
    height: "50%",
    borderBottomLeftRadius: 50,
    justifyContent: "flex-start",
    alignItems: "center",

    paddingLeft: Layout.padding.padding2,
  },

  lesson: {
    fontFamily: Typography.family.SFUIText.light,
    fontSize: 10,
    lineHeight: Typography.lineHeight.height4,
    textAlign: "left",
    paddingBottom: 65,
  },

  authorContainer: {
    width: "30%",
    height: "100%",
    borderBottomRightRadius: 50,
    backgroundColor: Colors.background.color2,
    justifyContent: "center",
    alignItems: "center",
  },

  author: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});

export default WrittenLesson;
