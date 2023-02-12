import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { OutAudioBg } from "../../constants/svgs/Friends/OutAudioBg";
import Typography from "../../constants/Typography";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { EndCall } from "../../constants/svgs/Friends/EndCall";
import { SpeakerOn } from "../../constants/svgs/Friends/SpeakerOn";

const AudioCallScreen = ({ navigation }) => {
  const [mic, setMic] = useState(false);

  const micOn = () => {
    console.log("Mic On!");
    setMic(!micOn);
  };
  const micOff = () => {
    console.log("Mic Off!");
    setMic(!micOn);
  };

  function user() {
    return (
      <View style={styles.main}>
        <View style={styles.userImageContainer}>
          <Image
            style={styles.userImage}
            source={{
              uri: "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
            }}
          />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Daphnie Deedra</Text>
          <Text style={styles.callingText}>Calling..........</Text>
        </View>
      </View>
    );
  }
  function controls() {
    return (
      <View style={styles.controlMainView}>
        <View style={styles.controlViewContainer}>
          <View style={styles.controlViewMic}>
            {micOn ? (
              <TouchableOpacity onPress={micOn}>
                <Ionicons name="ios-mic-off-outline" size={40} color="#fff" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={micOff}>
                <Ionicons name="ios-mic-outline" size={40} color="#fff" />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={{ position: "absolute", right: 0 }}
              onPress={() => console.log("speaker")}
            >
              <SpeakerOn width={40} height={40} />
            </TouchableOpacity>
          </View>
          <View style={styles.controlViewEndCall}>
            <TouchableOpacity
              style={styles.endCallTouchable}
              onPress={() => navigation.goBack()}
            >
              <EndCall width={30} height={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#00705E", "#002721", "#021915"]}
      style={{ flex: 1, width: "100%" }}
      start={{ x: -1.05, y: 0.96 }}
      end={{ x: -0.3, y: 0.3 }}
    >
      <View style={{ position: "relative", top: "-0%" }}>
        <OutAudioBg width={"100%"} height={"100%"} />
      </View>
      {user()}
      {controls()}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "45%",
  },
  userImageContainer: {
    width: "100%",
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    marginTop: 40,
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  userNameContainer: {
    width: "100%",
    height: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontFamily: Typography.family.Raleway.extraBold,
    fontSize: Typography.fontSize.h1 + 3,
    color: Colors.primary.color1,
  },
  callingText: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h5,
    color: Colors.tint.white,
    marginTop: 6,
  },

  controlMainView: {
    position: "absolute",
    top: "45%",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  controlViewContainer: {
    width: "74%",
    height: "70%",
  },
  controlViewMic: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    alignItems: "center",
  },
  controlViewEndCall: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  endCallTouchable: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#eb1e1e",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AudioCallScreen;
