import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Notification from "../../components/Notification";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { NotificationDesign } from "../../constants/svgs/MainDashboard/NotificationDesign";
import { Xcircle } from "../../constants/svgs/MainDashboard/Xcircle";
import Typography from "../../constants/Typography";
import { AntDesign } from "@expo/vector-icons";
import data from "../../dummyData/notification";

const NotificationScreen = ({ navigation }) => {
  const btnClose = useRef(new Animated.Value(0)).current;
  // const opacity = useRef(new Animated.Value(0)).current;
  const close = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(close, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  });

  function Animation() {
    Animated.timing(btnClose, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function OnClose() {
    // console.warn("OnClose called");
    Animation();
    navigation.goBack();
  }

  return (
    <View style={styles.main}>
      <View style={styles.design}>
        <NotificationDesign
          width={Layout.width * 1.9}
          height={Layout.height * 1.1}
        />
      </View>

      <View style={styles.top}>
        <Animated.Text
          style={[
            styles.new,
            {
              opacity,
            },
          ]}
        >
          New
        </Animated.Text>
        <Animated.View
          style={[
            styles.closeBtnContainer,
            {
              opacity,
            },
          ]}
        >
          <TouchableOpacity onPress={OnClose} style={styles.closeBtn}>
            <AntDesign name="closecircle" size={24} color="#9CC4C3" />
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.flatListContainer,
          {
            opacity,
          },
        ]}
      >
        <FlatList
          // vertical
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item: any) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                style={[
                  styles.flatListView,
                  {
                    opacity,
                  },
                ]}
              >
                <Notification
                  from={item.notificationFrom}
                  date={item.date}
                  avatar={item.avatar}
                />
              </Animated.View>
            );
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.background.color1,
    justifyContent: "center",
    alignItems: "center",
  },

  design: {
    position: "absolute",
    top: 10,
  },
  top: {
    width: Layout.width,
    height: "15%",
  },
  new: {
    fontFamily: Typography.family.Raleway.medium,
    fontSize: Typography.fontSize.h2,
    color: Colors.tint.white,
    position: "absolute",
    top: "60%",
    left: 30,
    zIndex: 1000,
  },
  closeBtnContainer: {
    position: "absolute",
    top: "25%",

    left: "48%",
    right: "50%",
  },
  closeBtn: {
    width: 40,
    height: "100%",
  },
  flatListContainer: {
    width: Layout.width,
    height: "85%",
    alignItems: "center",
    paddingTop: 20,
  },
  flatListView: {
    flex: 1,
    height: Layout.height * 0.25,
    paddingLeft: 20,
  },
});
export default NotificationScreen;
