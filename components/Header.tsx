import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Layout from "../constants/Layout";
import { Bell } from "../constants/svgs/MainDashboard/Bell";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth2";

const Header = (props) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  console.log("user: ", typeof user.displayName);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image style={styles.userPic} source={{ uri: user.photoURL }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toNotifications}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Bell width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "10%",
    paddingHorizontal: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    zIndex: 1000,
  },
  userPic: {
    width: Layout.height > 545 ? 45 : 30,
    height: Layout.height > 545 ? 45 : 30,
    borderRadius: 100,
  },
  toNotifications: { marginBottom: 10 },
});

export default Header;
