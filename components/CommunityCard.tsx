import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { Comments } from "../constants/svgs/community/Comments";
import { Heart } from "../constants/svgs/community/Heart";
import Typography from "../constants/Typography";

type CardProps = {
  route: any;
  avatar: any;
  poster: string;
  image: any;
  likes: number;
  comments: number;
  data: any;
  scrollXAnimated?: any;
};

type Items = {
  data: any;
  scrollXAnimated?: any;
};

const CommunityCard = ({
  route,
  avatar,
  poster,
  image,
  likes,
  comments,
}: // data,
// scrollXAnimated,
CardProps) => {
  const navigation = useNavigation();

  // const inputRange = [-1, 0, 1];
  // const translateY = scrollXAnimated.interpolate({});

  return (
    <View style={styles.main}>
      <Pressable onPress={() => navigation.navigate("PostDisplay")}>
        <View style={styles.containerImage}>
          <Image source={image} style={styles.image} />
        </View>
      </Pressable>

      <View style={styles.userContainer}>
        <View style={styles.userData}>
          <View style={styles.userImageContainer}>
            <Image source={avatar} style={styles.userImage} />
          </View>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{poster}</Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.likesContainer}>
            <View style={styles.heartIcon}>
              <Heart
                width={Layout.width * 0.08}
                height={Layout.height * 0.08}
              />
            </View>
            <View style={styles.likesCountContainer}>
              <Text style={styles.likesCount}>{likes}</Text>
            </View>
          </View>
          <View style={styles.commentsContainer}>
            <View style={styles.commentIcon}>
              <Comments
                width={Layout.width * 0.08}
                height={Layout.height * 0.08}
              />
            </View>
            <View style={styles.commentCountContainer}>
              <Text style={styles.commentCount}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "100%",
    borderRadius: 22,
    elevation: 122,
  },

  containerImage: {
    width: Layout.width * 0.8,
    height: "90%",
    backgroundColor: "#b56464",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: -10,
    overflow: "hidden",
  },

  image: {
    width: "126%",
    height: "100%",
    marginRight: "5%",
    marginTop: "0%",
    borderRadius: 22,
    backgroundColor: "#fff",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },

  userContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: Colors.shade.black,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userData: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    flexDirection: "row",
  },

  userImageContainer: {
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  userImage: {
    width: 33,
    height: 33,
    borderRadius: 22,
  },

  userNameContainer: {
    height: "100%",
    width: "60%",
    justifyContent: "center",
  },

  userName: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h3,
    color: Colors.primary.color1,
  },

  cardBottom: {
    height: "100%",
    width: "50%",
    flexDirection: "row",
  },
  likesContainer: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  heartIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  likesCountContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  likesCount: {
    fontFamily: Typography.family.Raleway.black,
    color: Colors.primary.color1,
    marginBottom: 5,
    marginLeft: 5,
  },
  commentsContainer: {
    justifyContent: "center",
    width: "50%",
    height: "100%",
    flexDirection: "row",
  },
  commentIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  commentCountContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  commentCount: {
    fontFamily: Typography.family.Raleway.black,
    marginBottom: 1,
    marginLeft: 1,
    color: Colors.primary.color1,
  },
});

export default CommunityCard;
