import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { MainDesign } from "../../constants/svgs/Community/MainDesign";
import { Others } from "../../constants/svgs/Talent/Others";
import { Upload } from "../../constants/svgs/Talent/Upload";
import Typography from "../../constants/Typography";

const TalentMenu = ({ navigation }) => {
  const btn1 = useRef(new Animated.Value(-1200)).current;
  const btn2 = useRef(new Animated.Value(1200)).current;
  const design = useRef(new Animated.Value(-2000)).current;

  useEffect(() => {
    Animated.spring(btn1, {
      toValue: 0,
      delay: 3000,
      useNativeDriver: true,
    }).start();
    Animated.spring(btn2, {
      toValue: 0,
      delay: 4000,
      useNativeDriver: true,
    }).start();
    Animated.spring(design, {
      toValue: 0,
      delay: 1000,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.talentUploadBtn,
          {
            transform: [{ translateX: btn1 }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Soon")}
          style={styles.toTalentUpload}
        >
          <Upload width={40} height={40} />

          <Text style={styles.upload}>Upload Yours</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.talentOtherBtn,
          {
            transform: [{ translateX: btn2 }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Soon")}
          style={styles.toTalentMain}
        >
          <Others width={40} height={40} />

          <Text style={styles.check}>Check Others</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.mainDesign, { translateY: design }]}>
        <MainDesign width={Layout.width * 1.7} height={Layout.height * 2.8} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.color1,
    marginTop: -110,
  },

  talentUploadBtn: { width: "70%", height: "10%", marginBottom: 10 },

  toTalentUpload: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary.color1,
    borderWidth: 1,
    borderRadius: 10,
    height: "80%",
    flexDirection: "row",
  },

  upload: {
    color: Colors.primary.color1,
    fontFamily: Typography.family.Raleway.regular,
    marginLeft: 35,
  },
  talentOtherBtn: {
    width: "70%",
    height: "10%",
    marginBottom: 10,
  },
  toTalentMain: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary.color1,
    borderWidth: 1,
    borderRadius: 10,
    height: "80%",
    flexDirection: "row",
  },
  check: {
    color: Colors.primary.color1,
    fontFamily: Typography.family.Raleway.regular,
    marginLeft: 35,
  },
  mainDesign: {
    position: "absolute",
    top: "-100%",
    zIndex: -1000,
  },
});

export default TalentMenu;
