import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  Easing,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View, Text, Animated, ActivityIndicator } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { MainDesign } from "../../constants/svgs/Community/MainDesign";
import Typography from "../../constants/Typography";

import { Instagram } from "../../constants/svgs/Community/Instagram";
import { Submit } from "../../constants/svgs/Community/Post";
import { useState } from "react";
import { BackBtn } from "../../constants/svgs/Community/BackBtn";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth2";
import { Ionicons, AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  ref,
  getStorage,
  getDownloadURL,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";
import { app, db } from "../../utils/firebase";
import { Alert } from "react-native";

const AddPostScreen = (props) => {
  const navigation = useNavigation();

  const [typingStarted, setTypingStarted] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [imagePressed, setImagePressed] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState<any>(false);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [dbImage, setDbImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  //Animations
  const designAnimation = useRef(new Animated.Value(0)).current;
  const userAnimation = useRef(new Animated.Value(0)).current;
  const placeholderAnimation = useRef(new Animated.Value(0)).current;
  const btnAnimations = useRef(new Animated.Value(0)).current;
  const btnAnimationBack = useRef(new Animated.Value(0)).current;
  const uploadAnimation = useRef(new Animated.Value(0)).current;

  const { user } = useAuth();

  const userName = user.displayName;
  const name = userName.split(" ")[0];

  let imageURL;

  useEffect(() => {
    console.log("at 78 imageURL: ", imageURL);
    console.log("at 78 dbImage: ", dbImage);

    if (dbImage) {
      //creating the db
      const postRef = collection(db, "posts");
      //Adding to the db
      addDoc(postRef, {
        userId: user.uid,
        // userId: user.uid,
        displayName: user.displayName,
        userPic: user.photoURL,
        image: dbImage,
        description: description,
        likes: 0,
        comments: 0,
        likedUsers: [],
        timestamp: serverTimestamp(),
      })
        .then(() => {
          Alert.alert("Your post is live  now!");

          navigation.navigate("CommunityDashboard");
          setLoading(false);
        })
        .catch((error) => {
          console.log("error at submitting", error);
          alert(error.message);
        });
    }
    console.log("at 82 dbImage: ", dbImage);

    return;
  }, [dbImage, imageUploaded]);
  //take above vaslues and change them with time or other functions
  useEffect(() => {
    Animated.timing(designAnimation, {
      toValue: -510,
      duration: 800,
      // easing: Easing.bezier[(0, 1)],
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
    Animated.timing(userAnimation, {
      toValue: 100,
      duration: 1400,
      useNativeDriver: true,
    }).start();
    Animated.timing(placeholderAnimation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(btnAnimationBack, {
      toValue: 100,
      duration: 30000,
      useNativeDriver: true,
    }).start();

    return;
  }, []);

  function revealingAnimation(text: string) {
    setTypingStarted(true);
    setDescription(text);
    console.log("description: ", description);

    if (typingStarted === true) {
      Animated.timing(btnAnimations, {
        toValue: 100,
        duration: 2200,
        useNativeDriver: true,
      }).start();
    } else {
      return;
    }
  }

  // CAMERA WORKINGS
  async function capture() {
    console.log("capture");
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data);
      setHasPermission(false);
      setImage(data.uri);
      console.log(image);
    }
  }

  async function cameraOn() {
    setPressed(!pressed);
    setCamera(true);
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  }

  async function gallery() {
    console.log("open up the gallery");
    setPressed(!pressed);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });
    if (!result.cancelled) {
      console.log(result.uri);
      setImage(result.uri);
    }
  }
  // ===================

  async function uploadImage() {
    const storage = getStorage();
    const storageRef = ref(storage, `files/${image}`);

    const response = await fetch(image);
    const blob = await response.blob();

    try {
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("It's uploaded!");
        setImageUploaded(true);
        console.log("@205: ", imageUploaded);
      });
    } catch (error) {
      console.log("at ref: ", error);
    }
  }

  // ===BACKEND STUFF====
  async function submitPost() {
    const storage = getStorage();
    const storageRef = await ref(storage, `files/${image}`);

    setSubmitted(true);
    uploadImage();

    await uploadBytesResumable(storageRef, image).then(() => {
      getDownloadURL(storageRef).then((url) => {
        console.log("url: ", url);
        imageURL = url;
        console.log("imageURL: ", imageURL);
        setDbImage(imageURL); //this where image is set
        console.log("@246 dbImage is: ", dbImage);
        console.log("@247: ", imageURL);
      });
    });

    console.log("@268 dbImage is: ", dbImage);
  }

  function theImage() {
    return (
      <>
        {!pressed && image ? (
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => setPressed(!pressed)}
              style={styles.imageTouchable}
            />

            <Image style={styles.image} source={{ uri: image }} />
          </View>
        ) : null}
      </>
    );
  }

  if (hasPermission) {
    return (
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} ref={(ref) => setCamera(ref)} type={type}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => setHasPermission(false)}
          >
            <Text style={{ fontSize: 12 }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipBtn}
            onPress={() =>
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              )
            }
          >
            <MaterialIcons
              name="flip-camera-android"
              size={28}
              color="#ffffff54"
            />
          </TouchableOpacity>
        </Camera>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnOutline} onPress={capture}>
            <View style={styles.btn} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.butttonMain}>
        <Animated.View
          style={[
            styles.buttton,
            {
              opacity: btnAnimationBack.interpolate({
                inputRange: [0, 90, 100],
                outputRange: [0, 0.7, 1],
              }),
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CommunityDashboard")}
          >
            <Ionicons
              name="return-up-back-outline"
              size={24}
              color="#00fed45e"
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[
            styles.mainDesign,
            {
              transform: [{ translateY: designAnimation }],
              opacity: image ? 0.2 : 1,
            },
          ]}
        >
          <MainDesign width={Layout.width * 1.4} height={Layout.height} />
        </Animated.View>
        <View style={styles.userImageContainer}>
          <Animated.View
            style={[
              styles.userImage,
              {
                borderColor: !image ? Colors.primary.color1 : "#00fed468",
                opacity: userAnimation.interpolate({
                  inputRange: [0, 60, 80, 100],
                  outputRange: [0, 0, 0, 1],
                }),
              },
            ]}
          >
            <Image
              style={[styles.user, { opacity: image ? 0.4 : 1 }]}
              source={{ uri: user.photoURL }}
            />
          </Animated.View>
        </View>
        <Animated.View
          style={[
            styles.textInputContainer,
            {
              opacity: placeholderAnimation.interpolate({
                inputRange: [0, 60, 100],
                outputRange: [0, 0, 1],
              }),
            },
          ]}
        >
          <TextInput
            onChangeText={(text) => revealingAnimation(text)}
            multiline={true}
            placeholder={`What is on your mind ${name}`}
            style={styles.textInput}
            placeholderTextColor={"#00b294ae"}
          />
        </Animated.View>
        {!submitted ? (
          theImage()
        ) : (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" />
          </View>
        )}
        <Animated.View style={styles.imageUploadContainer}>
          <KeyboardAvoidingView>
            <LinearGradient
              colors={["#000d0bc1", Colors.background.color1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.uploadBtnGradient}
            >
              <Animated.View
                style={[
                  styles.buttonContainer,
                  {
                    opacity: btnAnimations.interpolate({
                      inputRange: [0, 60, 100],
                      outputRange: [0, 0, 1],
                    }),
                  },
                ]}
              >
                <TouchableOpacity onPress={() => setPressed(!pressed)}>
                  <View style={{ opacity: pressed || image ? 0.3 : 1 }}>
                    {!submitted ? <Instagram width={45} height={45} /> : null}
                  </View>
                </TouchableOpacity>
                {pressed ? (
                  <>
                    <TouchableOpacity
                      onPress={cameraOn}
                      style={{ position: "absolute", top: -50, left: 20 }}
                    >
                      <AntDesign
                        name="camerao"
                        size={32}
                        color={Colors.primary.color1}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={gallery}
                      style={{ position: "absolute", top: -20, left: 100 }}
                    >
                      <Entypo
                        name="images"
                        size={32}
                        color={Colors.primary.color1}
                      />
                    </TouchableOpacity>
                  </>
                ) : null}
              </Animated.View>
              <Animated.View
                style={[
                  styles.submitContainer,
                  {
                    opacity: btnAnimations.interpolate({
                      inputRange: [0, 60, 100],
                      outputRange: [0, 0, 1],
                    }),
                  },
                ]}
              >
                <TouchableOpacity
                  disabled={!image ? true : false}
                  onPress={submitPost}
                >
                  <View style={{ opacity: pressed ? 0.3 : 1 }}>
                    {!submitted ? <Submit width={180} height={50} /> : null}
                  </View>
                </TouchableOpacity>
              </Animated.View>
            </LinearGradient>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  imageContainer: {
    width: "95%",
    height: "35%",
    position: "absolute",
    bottom: 100,
    elevation: 10,
    zIndex: -1000,
    borderRadius: 20,
    left: 5,
    borderWidth: 1,
    borderColor: Colors.primary.color1,
  },

  imageTouchable: {
    position: "absolute",
    top: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000098",
    zIndex: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  butttonMain: {
    flex: 1,
    backgroundColor: Colors.background.color1,
    zIndex: 1000,
  },
  buttton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  mainDesign: {
    position: "absolute",

    left: "-30%",
    zIndex: -100,
  },
  userImageContainer: {
    width: Layout.width,
    height: Layout.height * 0.2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginTop: Layout.margin.margin2,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
  },

  user: {
    width: "85%",
    height: "85%",
    marginLeft: "7%",
    marginTop: "7%",
    borderRadius: 100,
  },
  textInputContainer: {
    paddingTop: Layout.padding.padding3,
    height: Layout.height * 0.65,
    width: Layout.width,
    alignItems: "center",
  },
  textInput: {
    width: Layout.width * 0.7,
    color: Colors.primary.color1,
    fontFamily: Typography.family.Raleway.medium,
    fontSize:
      Layout.height < 545 ? Typography.fontSize.h3 + 3 : Typography.fontSize.h3,
    lineHeight: Typography.lineHeight.height2,
  },
  activityIndicator: {
    marginTop: -130,
  },
  imageUploadContainer: {
    width: Layout.width,
    height: Layout.height * 0.15,
  },
  uploadBtnGradient: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  buttonContainer: {
    height: "100%",
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  submitContainer: {
    height: "100%",
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 15,
    marginLeft: Layout.margin.margin3,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    height: "80%",
  },
  btnContainer: {
    backgroundColor: "#000000",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnOutline: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#fff",
    borderRadius: 40,
    height: 40,
    width: 40,
  },
  backBtn: {
    zIndex: 100,
    postion: "absolute",
    top: 10,
    right: -10,
    width: "20%",
    height: "5%",
    borderRadius: 12,
    backgroundColor: "#ffffff1c",
    justifyContent: "center",
    alignItems: "center",
  },
  flipBtn: {
    zIndex: 100,
    postion: "absolute",
    top: -16,
    left: 320,
  },
});
export default AddPostScreen;
