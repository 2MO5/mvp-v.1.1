import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import { useDeviceOrientation } from "@react-native-community/hooks";

type CommentProps = {
  avatar: string;
  comment: string;
  likes: number;
  dislikes: number;
};

const LessonVideoComments = (comment: CommentProps) => {
  const orientation = useDeviceOrientation();

  console.log("is orientation portrait: ", orientation.portrait);
  console.log("is orientation landscape: ", orientation.landscape);

  return (
    <View style={styles.main}>
      <View style={styles.avatar}>
        <Image
          style={
            orientation.landscape ? styles.avatarImageLand : styles.avatarImage
          }
          source={{
            uri: comment.avatar,
          }}
        />
      </View>
      <View style={styles.comment}>
        <Text
          style={
            orientation.landscape ? styles.commentTextLand : styles.commentText
          }
        >
          {comment.comment}
        </Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.statsData}>
          <TouchableOpacity
            style={
              orientation.landscape ? styles.dataLikeLand : styles.dataLike
            }
          >
            <AntDesign name="like2" size={14} color={Colors.secondary.color2} />
            <Text style={styles.statsText}>{comment.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataDisLike}>
            <AntDesign
              name="dislike2"
              size={14}
              color={Colors.secondary.color2}
            />
            <Text style={styles.statsText}>{comment.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 75,
    flexDirection: "row",
  },
  avatar: {
    width: "14%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  avatarImageLand: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  comment: {
    width: "72%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 5,
  },
  commentText: {
    fontSize: Typography.fontSize.Medium,
    color: "#ffffffaf",
    textAlign: "left",
    fontFamily: Typography.family.SFUIText.light,
    lineHeight: Typography.lineHeight.height4,
  },
  commentTextLand: {
    fontSize: Typography.fontSize.h4,
    color: "#ffffffaf",
    textAlign: "left",
    fontFamily: Typography.family.SFUIText.light,
    lineHeight: Typography.lineHeight.height4,
  },
  stats: {
    width: "14%",
    height: "100%",
    justifyContent: "flex-end",
  },
  statsData: {
    width: "100%",
    marginRight: 20,
    height: 30,
    flexDirection: "row",
    position: "absolute",
    bottom: -5,
    right: 2,
  },
  dataLike: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  dataLikeLand: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -10,
  },
  dataDisLike: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    marginLeft: 5,
  },
  statsText: {
    fontSize: 8,
    marginLeft: 3,
    color: Colors.primary.color1,
  },
});

export default LessonVideoComments;
