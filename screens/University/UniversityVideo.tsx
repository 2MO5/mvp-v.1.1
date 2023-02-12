import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  FlatList,
  StyleSheet,
} from "react-native";
import VideoLesson from "../../components/University/VideoLesson";
import VideoLessons from "../../dummyData/VideoLessons";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import { LinearGradient } from "expo-linear-gradient";
import Layout from "../../constants/Layout";

const UniversityVideo = ({ navigation }) => {
  const textAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(textAnimation, {
      toValue: 100,
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
        data={VideoLessons}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingTop: Layout.width * 1.0 }}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.videoList}>
              <VideoLesson
                title={item.title}
                thumbnailPic={item.thumbnail}
                avatar={item.avatar}
                user={item.user}
                comments={item.comments}
                likes={item.likes}
              />
            </View>
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
    height: Layout.height * 0.85,
    width: Layout.width,
    marginTop: -Layout.width * 0.9,
    paddingTop: 10,
    paddingBottom: -Layout.width * 1,
  },
});

export default UniversityVideo;
