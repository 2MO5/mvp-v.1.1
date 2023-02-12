import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  Image,
  Pressable,
  Animated,
  Easing,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import { LikeBtn } from "../../constants/svgs/Community/LiktBtn";
import { MainDesign } from "../../constants/svgs/Community/MainDesign";
import Typography from "../../constants/Typography";
import { ScrollView } from "react-native-gesture-handler";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Heart } from "../../constants/svgs/Community/Heart";
import { LikeBtnLiked } from "../../constants/svgs/Community/LiktBtnLiked";
import useAuth from "../../hooks/useAuth2";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
// import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

import { db } from "../../utils/firebase";

type Items = {
  data: any;
  scrollXAnimated: any;
};

const OverflowItems = ({ data, scrollXAnimated }) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({});
};

const PostDisplayScreen = ({ route }) => {
  const { user } = useAuth();

  const [liked, setLiked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [sheetUp, setSheetUp] = useState(false);

  const sheetRef = useRef();

  const designAnimation = useRef(new Animated.Value(0)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;
  const commentAnimation = useRef(new Animated.Value(0)).current;

  const { params } = route;
  const navigation = useNavigation();

  //============BottomSheet Work=======
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );

  // const snapPoints = useMemo(() => ["10%", "40%", "90%"], []);

  // const handleSheetChange = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);
  // const handleSnapPress = useCallback((index) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);
  // const handleClosePress = useCallback(() => {
  //   sheetRef.current.close();
  // }, []);

  useEffect(() => {
    let abortController = new AbortController();

    Animated.timing(designAnimation, {
      toValue: -230,
      duration: 600,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();

    Animated.timing(textAnimation, {
      toValue: 100,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    Animated.timing(commentAnimation, {
      toValue: 100,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    let abortController = new AbortController();
    UserCheck();
    return () => {
      abortController.abort();
      setLiked(false);
    };
  }, []);
  async function UserCheck() {
    // 1. Pull out the document
    // 2. Go the likedUsers
    // 3. See if the user exists

    let data = [];
    let id;
    const querySnap = query(collection(db, "posts"));
    onSnapshot(querySnap, (snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.id === params.id) {
          data.push(doc.data());
          id = data[0].likedUsers[0];
          if (id === user.uid) {
            console.log("you've liked it before!");
            setLiked(true);
          }
        }
      });
    });
  }

  async function PostLike() {
    setLiked(true);

    // try {
    //   const postRef = doc(db, "posts", params.id);
    //   await updateDoc(postRef, {
    //     likedUsers: arrayUnion(user.uid),
    //   });

    //   console.log("added!");
    // } catch (error) {
    //   console.log(error);
    // }
  }
  async function PostUnLike() {
    setLiked(false);

    // try {
    //   const postRef = doc(db, "posts", params.id);
    //   await updateDoc(postRef, {
    //     likedUsers: arrayRemove(user.uid),
    //   });
    //   console.log("Outta here!");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  function comments() {
    console.log("comments");
    setSheetUp(!sheetUp);
    handleSnapPress(2);
  }

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000",
          }}
          style={styles.itemContainer}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 50, marginRight: 20 }}
            source={{
              uri: "https://as1.ftcdn.net/v2/jpg/00/84/58/86/1000_F_84588657_bWFCviijaLzBAQ5Yah2QkhMdBL8ueic5.jpg",
            }}
          />
          <Text>This is a comment for - {item}</Text>
          <View style={{ alignItems: "center", marginLeft: 20 }}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              {!liked ? (
                <AntDesign name="hearto" size={24} color="black" />
              ) : (
                <AntDesign name="heart" size={24} color="black" />
              )}
            </TouchableOpacity>
            <Text>12</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    ),
    []
  );
  return (
    <SafeAreaView style={styles.safeAreaMainContainer}>
      <View style={styles.mainImageContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FullScreenPost", {
              image: params.image,
            })
          }
          style={styles.mainImageTouchable}
        >
          <Image source={{ uri: params.image }} style={styles.mainImage} />
        </TouchableOpacity>

        <View style={styles.likedBtnContainer}>
          <TouchableOpacity
            style={styles.btnOpacity}
            // onPress={liked ? PostUnLike : PostLike}
            onPress={() => setLiked(!liked)}
          >
            {liked ? (
              <LikeBtnLiked width={150} height={155} />
            ) : (
              <LikeBtn width={150} height={155} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrollViewMainContainer}>
        <View style={styles.scrollViewContainer}>
          <ScrollView>
            <Animated.Text
              style={[
                styles.scrollViewPostText,
                {
                  opacity: textAnimation.interpolate({
                    inputRange: [0, 80, 90, 100],
                    outputRange: [0, 0, 0.5, 1],
                  }),
                },
              ]}
            >
              {params.description}
            </Animated.Text>
          </ScrollView>
        </View>

        <View style={styles.mainCommentContainer}>
          <View style={styles.commentsContainer}>
            <TouchableOpacity onPress={comments}>
              <Animated.Text
                style={[
                  styles.commentText,
                  {
                    opacity: commentAnimation.interpolate({
                      inputRange: [0, 80, 90, 100],
                      outputRange: [0, 0, 0.1, 1],
                    }),
                  },
                ]}
              >
                Comments ({params.comments})
              </Animated.Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* {sheetUp ? (
        <View
          style={{
            width: Layout.width,
            height: Layout.height * 1,
            position: "absolute",
            top: 10,
            // backgroundColor: "teal",
            zIndex: 1000,
          }}
        >
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
          >
            <BottomSheetFlatList
              data={data}
              keyExtractor={(i) => i}
              renderItem={renderItem}
              contentContainerStyle={styles.contentContainer}
            />
          </BottomSheet>
        </View>
      ) : null} */}
      <Animated.View
        style={[
          styles.designStyle,
          {
            transform: [{ translateY: designAnimation }],
          },
        ]}
      >
        <MainDesign width={Layout.width * 1.4} height={Layout.height} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.background.color1,
  },
  imageTouchableContainer: {
    width: "100%",
    height: "45%",
  },
  imageTouchable: {
    height: "100%",
    width: "100%",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#6d6868",
    aspectRatio: 1.8,
    marginLeft: -Layout.margin.margin4,
    position: "relative",
  },
  buttton: {},
  mainDesign: {},
  userImageContainer: {},
  userImage: {},
  textInputContainer: {},
  textInput: {},
  activityIndicator: {},
  imageUploadContainer: {},
  uploadBtnGradient: {},
  btnContainer: {},
  submitContainer: {},

  safeAreaMainContainer: {
    flex: 1,
    backgroundColor: Colors.background.color1,
  },
  mainImageContainer: {
    width: "100%",
    height: "45%",
  },
  mainImageTouchable: {
    height: "100%",
    width: "100%",
  },
  mainImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#6d6868",
    aspectRatio: 1.8,
    marginLeft: -Layout.margin.margin4,
    position: "relative",
  },
  likedBtnContainer: {
    position: "absolute",
    bottom: "-20%",
    width: "100%",
    height: "25%",

    justifyContent: "center",
    alignItems: "center",
  },
  btnOpacity: {
    zIndex: 1000,
  },

  scrollViewMainContainer: {
    width: "100%",
    height: "55%",
  },
  scrollViewContainer: {
    width: "100%",
    height: "80%",
    paddingTop: "20%",
    paddingHorizontal: "8%",
  },
  scrollViewPostText: {
    textAlign: "center",
    color: Colors.primary.color1,
    lineHeight: Typography.lineHeight.height1,
    fontFamily: Typography.family.SFUIText.light,
  },

  mainCommentContainer: {
    width: "90%",
    marginHorizontal: "5%",
    height: 50,
  },
  commentsContainer: {
    backgroundColor: Colors.background.variation7,
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  commentText: {
    fontFamily: Typography.family.SFUIText.regular,
    fontSize:
      Layout.height < 545 ? Typography.fontSize.h2 - 5 : Typography.fontSize.h4,
    color: Colors.tint.white,
  },
  designStyle: {
    position: "absolute",
    // top: "-31%",
    left: "-23%",
    zIndex: -100,
  },

  itemContainer: {
    flexDirection: "row",
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  contentContainer: {
    backgroundColor: "white",
  },
});

export default PostDisplayScreen;
