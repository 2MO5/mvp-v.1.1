import { View, Text, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import React from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

const LessonVideo = () => {
  const orientation = useDeviceOrientation();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={orientation.landscape ? styles.videoLand : styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 200,
    justifyContent: "center",
    marginTop: "-14.4%",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
  },
  videoLand: {
    alignSelf: "center",
    width: "90%",
    height: "250%",
    zIndex: 100,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LessonVideo;
