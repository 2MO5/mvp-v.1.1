import {
  useNavigation,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  Animated,
  Easing,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
// import CommunityCard from "../../components/CommunityCard";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { AddPost } from "../../constants/svgs/Community/AddPost";
import { MainDesign } from "../../constants/svgs/Community/MainDesign";
import { useIsFocused } from "@react-navigation/native";
import DATA from "../../dummyData/data";
import { Heart } from "../../constants/svgs/Community/Heart";
import { Comments } from "../../constants/svgs/Community/Comments";
import Typography from "../../constants/Typography";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

type Props = {
  route?: any;
};

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
const { width } = Dimensions.get("screen");

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const VISIBLE_ITEMS = 3;

const CommunityCard = ({
  route,
  avatar,
  poster,
  image,
  likes,
  comments,
  data,
  scrollXAnimated,
}: CardProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardMain}>
      <TouchableOpacity
        style={{ width: "100%", height: "100%", backgroundColor: "red" }}
        onPress={() => console.log("PostDisplay")}
      >
        <View style={styles.postView}>
          <Image source={image} style={styles.postImage} />
        </View>
      </TouchableOpacity>

      <View style={styles.userContainer}>
        <View style={styles.userContainerTop}>
          <View style={styles.topAvatar}>
            <Image source={avatar} style={styles.topAvatarPic} />
          </View>
          <View style={styles.userContainerBottom}>
            <Text style={styles.posterName}>{poster}</Text>
          </View>
        </View>
        <View style={styles.mainBottomContainer}>
          <View style={styles.bottomContainerTop}>
            <View style={styles.bottomContainerHeart}>
              <Heart
                width={Layout.width * 0.08}
                height={Layout.height * 0.08}
              />
            </View>
            <View style={styles.bottomContainerLike}>
              <Text style={styles.likesCount}>{likes}</Text>
            </View>
          </View>
          <View style={styles.bottomContainerComments}>
            <View style={styles.commentsContainer}>
              <Comments
                width={Layout.width * 0.08}
                height={Layout.height * 0.08}
              />
            </View>
            <View style={styles.commentsCountContainer}>
              <Text style={styles.commentsCount}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const CommunityDashboard = ({ route }: Props) => {
  const [docID, setDocID] = useState([]);
  const [postReady, setPostReady] = useState(false);
  const [dbData, setDbData] = useState([]);
  const [navigated, setNavigated] = useState(false);
  const [fromAddPost, setFromAddPost] = useState(false);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<any>(DATA);
  const setActiveIndex = useCallback((activeIndex: number) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });
  const [loading, setLoading] = useState(true);
  // const { isFrom } = route?.params;
  const componentMounted = useRef(true);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const scrollXIndex = useRef(new Animated.Value(0)).current;

  const cardAnimation = useRef(new Animated.Value(0)).current;
  const btnOpacity = useRef(new Animated.Value(0)).current;
  const designAnimation = useRef(new Animated.Value(0)).current;
  const designAnimationDown = useRef(new Animated.Value(0)).current;

  //When navigating back if the previous route is maindashboard don't do the animation else do it!
  //Check if the previous route is MainDashboard
  //if it is keep the animation still
  // else move the animation from top to bottom
  function UpAnimation() {
    Animated.timing(designAnimation, {
      toValue: 100,
      duration: 1000,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  }

  async function ToAddPost() {
    setNavigated(true);
    navigation.navigate("AddPost");

    if (navigated) {
      await UpAnimation();
    }

    console.log("@59 navigated: ", navigated);
  }

  async function PullPostData() {
    console.log("@PostData");

    let data = [];
    let dataDb = {};
    let ids = [];

    const querySnap = await query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );

    const postData = await onSnapshot(querySnap, (snapshot) => {
      snapshot.docs.map((doc) => {
        dataDb = doc.data();
        console.log("id: ", doc.id);
        console.log("@197: ", dataDb);
        const dataValues = Object.entries(dataDb);

        const newData = Object.fromEntries(dataValues);
        // console.log("new obj: ", newData);

        setDocID(doc.id);
        data.push(newData);
        setDbData(data);
        setDocID(ids);
        // console.log("dbData: ", dbData);
      });
      if (dbData) {
        console.log("db data is ready!");
        console.log("dbData: ", dbData[0]);
        setPostReady(true);
        setLoading(false);
      }
    });

    return postData;
  }

  // useEffect(() => {
  //   // console.log("postReady: ", postReady);
  //   const unsubscribe = () => {
  //     if (componentMounted.current) {
  //       console.log("component is now in!");
  //       setPostReady(!postReady);
  //       PullPostData();
  //       // setDbData([]);
  //       // setDocID(null);
  //       // setPostReady(null);
  //     }
  //   };
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    Animated.timing(cardAnimation, {
      toValue: 100,
      duration: 2200,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
    Animated.timing(btnOpacity, {
      toValue: 100,
      duration: 19900,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    return;
  });

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();

    return;
  }, [postReady]);

  useEffect(() => {
    setPostReady(!postReady);

    console.log("@262 postReady: ", postReady);
    PullPostData();
    if (index === data.length - VISIBLE_ITEMS - 1) {
      const newData = [...data, ...data];
      setData(newData);

      setInterval(() => {
        console.log("In setInterval!");
        scrollXIndex.setValue(Math.floor(Math.random() * data.length));
      }, 1000);
    }
    // const unsubscribe = () => {
    //   console.log("component is back again!");
    //   setInterval(() => {
    //     scrollXIndex.setValue(Math.floor(Math.random() * data.length));
    //   }, 15500);
    //   console.log("Working");

    //   PullPostData();
    // };
    // return unsubscribe;
  }, []);

  // useEffect(() => {
  //   if (index === data.length - VISIBLE_ITEMS - 1) {
  //     const newData = [...data, ...data];
  //     setData(newData);

  //     setInterval(() => {
  //       console.log("In setInterval!");
  //       scrollXIndex.setValue(Math.floor(Math.random() * data.length));
  //     }, 1000);
  //   }
  // }, []);

  return (
    <View style={styles.main}>
      <Animated.View style={styles.mainDesign}>
        <MainDesign width={Layout.width * 1.4} height={Layout.height} />
      </Animated.View>

      <Animated.View
        style={[
          styles.cards,
          {
            top: cardAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["-200%", "12%"],
            }),
          },
        ]}
      >
        <FlingGestureHandler
          key="left"
          direction={Directions.LEFT}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (index === data.length - 1) {
                return;
              }
              // setIndex(index + 1);
              // scrollXIndex.setValue(index + 1);
              // setActiveIndex(index + 1);
              setInterval(() => {
                console.log("In setInterval!");
                scrollXIndex.setValue(Math.floor(Math.random() * data.length));
              }, 1000);
            }
            setActiveIndex(index + 1);
            console.log("left");
          }}
        >
          <FlingGestureHandler
            key="right"
            direction={Directions.RIGHT}
            onHandlerStateChange={(ev) => {
              if (ev.nativeEvent.state === State.END) {
                if (index === 0) {
                  return;
                }
                setActiveIndex(index - 1);
              }
            }}
          >
            {!loading ? (
              <FlatList
                horizontal
                inverted
                data={dbData}
                keyExtractor={(_, index) => String(index)}
                contentContainerStyle={styles.flatlistContainer}
                scrollEnabled={false}
                removeClippedSubviews={false}
                CellRendererComponent={({
                  item,
                  index,
                  children,
                  style,
                  ...props
                }) => {
                  const newStyle = [style, { zIndex: data.length - index }];
                  return (
                    <View style={newStyle} index={index} {...props}>
                      {children}
                    </View>
                  );
                }}
                renderItem={({ item, index }) => {
                  const inputRange = [index - 1, index, index + 1];
                  const translateX = scrollXAnimated.interpolate({
                    inputRange,
                    outputRange: [50, 0, -100],
                  });

                  const scale = scrollXAnimated.interpolate({
                    inputRange,
                    outputRange: [0.8, 1, 1.4],
                  });

                  const opacity = scrollXAnimated.interpolate({
                    inputRange,
                    outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                  });

                  return (
                    <Animated.View
                      style={[
                        styles.cardMainView,
                        {
                          opacity,
                          transform: [{ translateX }, { scale }],
                        },
                      ]}
                    >
                      <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={() =>
                          navigation.navigate("PostDisplay", {
                            id: item.docID,
                            image: item.image,
                            comments: item.comments,
                            description: item.description,
                          })
                        }
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={styles.cardImage}
                        />
                      </TouchableOpacity>
                      <View style={styles.avatarImage}>
                        <TouchableOpacity>
                          <Image
                            style={styles.avatarImage}
                            source={{ uri: item.avatar }}
                          />
                        </TouchableOpacity>
                      </View>
                    </Animated.View>
                  );
                }}
              />
            ) : (
              <View style={styles.activityIndicator}>
                <ActivityIndicator size="large" />
              </View>
            )}
          </FlingGestureHandler>
        </FlingGestureHandler>
      </Animated.View>
      <Animated.View
        style={[
          styles.addPostBtn,
          {
            opacity: btnOpacity.interpolate({
              inputRange: [0, 70, 80, 100],
              outputRange: [0, 0.1, 0.6, 1],
            }),
          },
        ]}
      >
        <TouchableOpacity onPress={ToAddPost}>
          <AddPost width={100} height={100} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardMain: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
    borderRadius: 22,
    elevation: 122,
    marginTop: 30,
  },

  postView: {
    width: Layout.width * 0.8,
    height: "100%",
    backgroundColor: "#c57c7c",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: -10,
    overflow: "hidden",
  },

  postImage: {
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

  userContainerTop: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    flexDirection: "row",
  },
  userContainerBottom: {
    height: "100%",
    width: "60%",
    justifyContent: "center",
  },

  topAvatar: {
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  topAvatarPic: { width: 33, height: 33, borderRadius: 22 },

  mainBottomContainer: {
    height: "100%",
    width: "50%",
    flexDirection: "row",
  },

  main: {
    flex: 1,
    backgroundColor: Colors.background.color1,
  },

  posterName: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h3,
    color: Colors.primary.color1,
  },

  bottomContainerTop: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  bottomContainerHeart: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainerLike: {
    justifyContent: "center",
    alignItems: "center",
  },

  likesCount: {
    fontFamily: Typography.family.Raleway.black,
    color: Colors.primary.color1,
    marginBottom: 5,
    marginLeft: 5,
  },

  commentsCount: {
    fontFamily: Typography.family.Raleway.black,
    marginBottom: 1,
    marginLeft: 1,
    color: Colors.primary.color1,
  },

  bottomContainerComments: {
    justifyContent: "center",
    width: "50%",
    height: "100%",
    flexDirection: "row",
  },

  commentsContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },

  commentsCountContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  mainDesign: {
    position: "absolute",
    top: "-1%",
    left: "-30%",
    zIndex: -100,
  },
  cards: {
    width: Layout.width,
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  flatlistContainer: {
    flex: 1,
    justifyContent: "center",
    padding: SPACING * 0.7,
    marginTop: 20,
  },

  cardMainView: {
    position: "absolute",
    left: -ITEM_WIDTH / 2,
    height: ITEM_HEIGHT * 1.1,
  },
  touchableOpacity: {
    width: "100%",
  },
  cardImage: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 1,
    borderRadius: 14,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    bottom: 52,
    marginLeft: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  activityIndicator: {
    marginTop: "-20%",
  },
  addPostBtn: {
    position: "absolute",
    bottom: "1%",
    width: "100%",
    alignItems: "center",
  },
});

export default CommunityDashboard;
