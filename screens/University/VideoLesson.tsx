import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import { Video, AVPlaybackStatus } from "expo-av";
import LessonVideo from "../../components/University/LessonVideo";
import LessonVideoComments from "../../components/University/LessonVideoComments";
import { Ionicons } from "@expo/vector-icons";
import CommentVideo from "../../dummyData/CommentVideo";
import Typography from "../../constants/Typography";
import { useDeviceOrientation } from "@react-native-community/hooks";

const VideoLesson = ({ route }) => {
  const { params } = route;
  console.log("route", route);
  const orientation = useDeviceOrientation();
  const width = Dimensions.get("window").width;

  console.log("is orientation portrait: ", orientation.portrait);
  console.log("is orientation landscape: ", orientation.landscape);
  function AddComment() {
    return (
      <View
        style={
          orientation.landscape
            ? styles.mainCommentContainerLand
            : styles.mainCommentContainer
        }
      >
        <TextInput
          placeholder="Enter your comment as well!"
          multiline={true}
          placeholderTextColor={"#ffffff62"}
          style={
            orientation.landscape ? styles.textInputLand : styles.textInput
          }
        />
        <TouchableOpacity onPress={() => console.log("Comment Gone!")}>
          <Ionicons
            name="send-outline"
            size={24}
            color={Colors.primary.color1}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#00967da5", "#280C3D"]}
      start={{ x: -1.75, y: 0.99 }}
      end={{ x: 2.5, y: 0.3 }}
      locations={[0.3, 1]}
      style={styles.mainContainer}
    >
      <View style={styles.videoContainer}>
        <View style={{ width: width, height: "75%" }}>
          <LessonVideo />
        </View>
        <View
          style={[
            styles.addComment,
            {
              display: orientation.landscape ? "none" : null,
            },
          ]}
        >
          <AddComment />
        </View>
      </View>
      <View style={styles.scrollView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            orientation.landscape
              ? styles.contentContainerLandscape
              : styles.contentContainerPort
          }
          data={CommentVideo}
          keyExtractor={(item: any) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flex: 1 }}>
                <LessonVideoComments
                  avatar={item.avatar}
                  comment={item.comment}
                  likes={item.likes}
                  dislikes={item.dislike}
                />
              </View>
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
  },
  videoContainer: {
    width: "100%",
    height: "45%",
  },
  mainCommentContainer: {
    width: "100%",
    height: "100%",
    marginTop: -40,
    flexDirection: "row",
    alignItems: "center",
  },
  mainCommentContainerLand: {
    width: "100%",
    height: "160%",
    marginTop: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  commentContainer: {
    zIndex: -10,
  },
  scrollView: {
    flex: 1,
    marginTop: -60,
    width: "100%",
    height: "100%",
    paddingLeft: 5,
  },
  textInput: {
    width: "90%",
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 5,
    color: "#fff",
    fontFamily: Typography.family.Gilroy.light,
  },
  textInputLand: {
    zIndex: 100,
    width: "90%",
    height: "100%",
    paddingBottom: 30,
    paddingLeft: 35,
    paddingTop: 20,
    paddingRight: 5,
    color: "#fff",
    fontFamily: Typography.family.Gilroy.light,
  },

  icon: {
    marginBottom: 25,
  },

  addComment: {
    width: "100%",
    height: "25%",
  },

  contentContainerLandscape: {
    paddingBottom: 30,
    marginTop: 130,
    zIndex: -10,
    display: "none",
  },
  contentContainerPort: {
    paddingBottom: 30,
    marginTop: 0,
    zIndex: null,
    display: null,
  },
});

export default VideoLesson;
