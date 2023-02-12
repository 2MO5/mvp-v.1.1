import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import Typography from "../../constants/Typography";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type videoLessonType = {
  title: string;
  thumbnailPic: string;
  avatar: string;
  comments: number;
  likes: number;
  user: string;
};

const VideoLesson = ({
  title,
  thumbnailPic,
  avatar,
  comments,
  likes,
  user,
}: videoLessonType) => {
  const navigation = useNavigation();

  function thumbnail() {
    return (
      <Image
        source={{
          uri: thumbnailPic,
        }}
        resizeMode="stretch"
        style={styles.thumbnail}
      ></Image>
    );
  }

  function footer() {
    return (
      <LinearGradient
        style={styles.footerMain}
        colors={["#067764a3", "#4c1576"]}
        start={{ x: -1.75, y: 0.99 }}
        end={{ x: 2.5, y: 0.3 }}
        locations={[0.3, 1]}
      >
        <View style={styles.userAvatar}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.avatarImage}
          />
        </View>

        <View style={styles.containerMiddle}>
          <View style={styles.videoDetails}>
            <Text style={styles.videoTitle}>{title}</Text>
          </View>
          <View style={styles.videoStats}>
            <Text style={styles.likes}>{likes} Likes</Text>
            <View style={styles.dotDivider}></View>
            <Text style={styles.comments}>{comments} Comments</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }

  return (
    <SafeAreaView style={{ flexGrow: 1, height: "10%" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("VideoLesson", {
            title: title,
            thumbnailPic: thumbnailPic,
            avatar: avatar,
            user: user,
            comments: comments,
            likes: likes,
          })
        }
        style={styles.containerMain}
      >
        <View style={styles.timestampView}>
          <Text style={styles.timestamp}>23:33</Text>
        </View>
        {thumbnail()}
        {footer()}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //main
  containerMain: {
    width: "93%",
    height: "40%",
    borderRadius: 12,
    elevation: 60,
  },
  timestampView: {
    zIndex: 1000,
    width: 50,
    height: 20,
    borderRadius: 7,

    position: "absolute",
    bottom: 85,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  timestamp: {
    fontFamily: Typography.family.Raleway.medium,
    fontSize: 10,
    color: "#fff",
  },

  //thumbnail
  thumbnail: {
    flex: 1,
    flexGrow: 1,
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  //footer
  footerMain: {
    width: "100%",
    height: "30%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: "row",
  },

  userAvatar: {
    height: "100%",
    width: "20%",
    borderBottomLeftRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  containerMiddle: {
    height: "100%",
    width: "80%",
    borderBottomRightRadius: 12,
    flexDirection: "column",
  },

  videoDetails: {
    height: "50%",
    width: "100%",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },

  videoTitle: {
    marginLeft: 3,
    fontSize: 14,
    fontFamily: Typography.family.Gilroy.light,
    color: "#fff",
  },

  videoStats: {
    height: "50%",
    width: "100%",
    borderBottomRightRadius: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 5,
  },

  likes: {
    marginLeft: 3,
    marginRight: 8,
    fontSize: 10,
    fontFamily: Typography.family.Raleway.regular,
    color: "#fff",
  },

  dotDivider: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: "#f5f5f571",
    marginTop: 5,
  },

  comments: {
    marginLeft: 10,
    fontSize: 10,
    fontFamily: Typography.family.Raleway.regular,
    color: "#fff",
  },
});

export default VideoLesson;
