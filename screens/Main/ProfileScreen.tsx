import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth2";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import data from "../../dummyData/data.ts";
import { Smiley } from "../../constants/svgs/MainDashboard/Smiley";
import { AntDesign } from "@expo/vector-icons";
import Layout from "../../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { Edit } from "../../constants/svgs/Profile/Edit";

const ProfileScreen = ({ navigation }) => {
  const { logout, user } = useAuth();
  const translation = useRef(
    // new Animated.Value(0)
    new Animated.ValueXY({ x: -150, y: 0 })
  ).current;

  const translateDesign = useRef(new Animated.Value(1000)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;
  const textAnimation1 = useRef(new Animated.Value(0)).current;

  const friendsTab = useRef(new Animated.Value(1000)).current;
  const friendsPics = useRef(new Animated.Value(-1000)).current;
  const logoutOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      easing: Easing.bounce,
      delay: 2000,
      // duration: 3000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateDesign, {
      toValue: 0,
      easing: Easing.bounce,
      delay: 2000,
      // duration: 3000,
      useNativeDriver: true,
    }).start();

    Animated.timing(textAnimation, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: true,
    }).start();

    Animated.timing(textAnimation1, {
      toValue: 1,
      duration: 25000,
      useNativeDriver: true,
    }).start();

    Animated.spring(friendsTab, {
      toValue: 0,
      delay: 3000,
      bounciness: 9,
      useNativeDriver: true,
    }).start();
    Animated.spring(friendsPics, {
      toValue: 0,
      delay: 4000,
      bounciness: 9,
      useNativeDriver: true,
    }).start();

    Animated.timing(logoutOpacity, {
      toValue: 1,
      duration: 60000,
      useNativeDriver: true,
    }).start();
  });

  function renderTop() {
    return (
      <Animated.View style={styles.topMainContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: translateDesign }],
          }}
        >
          <Image
            style={styles.design}
            source={require("../../assets/images/profile/Profiledeisgn.png")}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.goBack,
            {
              opacity: logoutOpacity,
            },
          ]}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="return-up-back-outline" size={24} color="#595555" />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            styles.userContainer,
            {
              transform: [
                { translateY: translation.y },
                { translateX: translation.x },
              ],
            },
          ]}
        >
          <Image style={styles.userImage} source={{ uri: user.photoURL }} />
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={{ position: "absolute", bottom: "-14%", marginLeft: "35%" }}
          >
            <Edit width={35} height={35} />
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.toEditProfile}>
          <View style={styles.userDetailsContainer}>
            <Animated.Text
              style={[
                styles.userName,
                {
                  opacity: textAnimation,
                },
              ]}
            >
              {user.displayName}
            </Animated.Text>
          </View>
          <View style={styles.userAbout}>
            <View style={styles.friends}>
              <Animated.Text style={[styles.text, { opacity: textAnimation1 }]}>
                100 <Text style={styles.textSpan}>FRIENDS</Text>
              </Animated.Text>
            </View>
            <View style={styles.posts}>
              <Animated.Text
                style={[
                  styles.text,
                  {
                    opacity: textAnimation1,
                  },
                ]}
              >
                200 <Text style={styles.textSpan}>POSTS</Text>
              </Animated.Text>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
  function renderBottom() {
    function renderFirst() {
      return (
        <Animated.View
          style={[
            styles.firstMainContainer,
            {
              transform: [{ translateX: friendsTab }],
            },
          ]}
        >
          <View style={styles.firstMain}>
            <Text style={styles.friendsText}>Your Friends</Text>
          </View>
          <View style={styles.firstSub}>
            <Text style={styles.subText}>100</Text>
            <Smiley width={"30%"} height={"35%"} />
          </View>
        </Animated.View>
      );
    }
    function renderSecond() {
      return (
        <View style={styles.secondMainContainer}>
          <View style={styles.flatList}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item, index }) => {
                return (
                  <Animated.View
                    style={[
                      styles.flatListMain,
                      {
                        transform: [{ translateX: friendsPics }],
                      },
                    ]}
                  >
                    <Image
                      style={styles.postImage}
                      source={{ uri: item.image }}
                    />
                  </Animated.View>
                );
              }}
            />
          </View>
        </View>
      );
    }
    function renderThird() {
      return (
        <Animated.View
          style={[styles.thirdMainContainer, { opacity: logoutOpacity }]}
        >
          <TouchableOpacity onPress={logout} style={styles.thirdTouchable}>
            <View style={styles.thirdIcons}>
              <AntDesign name="logout" size={24} color="#476661" />
              <Text style={styles.logOut}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      );
    }

    return (
      <View style={{ width: "100%", height: "45%" }}>
        {renderFirst()}
        {renderSecond()}
        {renderThird()}
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {renderTop()}

      {renderBottom()}
    </View>
  );
};

const styles = StyleSheet.create({
  //Top
  topMainContainer: {
    width: "100%",
    height: "57%",
  },
  design: { width: "100%", height: "100%" },
  goBack: {
    zIndex: 100,
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  userContainer: {
    width: "30%",
    height: "28%",
    borderRadius: 100,
    position: "absolute",
    bottom: "20%",
    left: 15,
    zIndex: 100,
  },
  userImage: {
    width: 118,
    height: 118,
    borderRadius: 100,
  },
  toEditProfile: {
    width: "70%",
    height: "25%",
    zIndex: 100,
    position: "absolute",
    bottom: "40%",
    right: "3%",
  },
  userDetailsContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  userName: {
    fontFamily: Typography.family.AbrilFatface.regular,
    fontSize: Typography.fontSize.h1,
  },
  userAbout: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  friends: {
    paddingRight: "5%",
  },
  posts: {
    paddingRight: "3%",
  },
  text: {
    fontFamily: Typography.family.AbrilFatface.regular,
  },
  textSpan: {
    fontFamily: Typography.family.Raleway.regular,
  },
  //Bottom
  // -->First
  firstMainContainer: {
    width: "100%",
    height: "25%",

    marginLeft: "7%",
    borderColor: Colors.primary.color1,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
  },
  firstMain: {
    width: "35%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  friendsText: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h3,
    color: Colors.tint.white,
    marginLeft: 20,
  },
  firstSub: {
    width: "65%",
    height: "100%",
    paddingRight: "12%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  subText: {},

  // -->Second
  secondMainContainer: {
    flex: 1,
    width: "100%",
    height: "60%",
  },
  flatList: {
    flex: 1,
    width: "100%",
    marginLeft: "5%",
  },
  flatListMain: {
    width: Layout.width * 0.3, //give full width
    height: "100%",
    marginVertical: 15,
    marginHorizontal: 0,
  },
  postImage: {
    width: "80%",
    height: "70%",
    borderRadius: 12,
  },
  // -->Third
  thirdMainContainer: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  thirdTouchable: {
    justifyContent: "center",
    alignItems: "center",
  },
  thirdIcons: {
    width: "40%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15%",
  },

  logOut: {
    fontFamily: Typography.family.Raleway.regular,
    color: "#6B9991",
    marginLeft: 10,
  },

  //MAIN
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
  },
});

export default ProfileScreen;
