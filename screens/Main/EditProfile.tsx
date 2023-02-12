import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { EditProfileDesign } from "../../constants/svgs/Profile/EditProfileDesign";
import { AddPic } from "../../constants/svgs/Profile/AddPic";
import { TextInput } from "react-native";
import Typography from "../../constants/Typography";
import { Easing } from "react-native-reanimated";
import { KeyboardAvoidingView } from "react-native";
import useAuth from "../../hooks/useAuth2";

const EditProfile = ({ navigation }) => {
  const [image, setImage] = useState(false);
  const { user } = useAuth();

  function header() {
    const pic = useRef(new Animated.Value(-1000)).current;
    const designAnimation = useRef(new Animated.Value(1000)).current;

    useEffect(() => {
      Animated.spring(pic, {
        toValue: 0,
        bounciness: 10,
        delay: 2000,
        useNativeDriver: true,
      }).start();

      Animated.spring(designAnimation, {
        toValue: 0,
        bounciness: 10,
        delay: 1000,
        useNativeDriver: true,
      }).start();
    });

    function openGallery() {
      console.log("It's time to open the gallery!");
    }

    return (
      <KeyboardAvoidingView style={styles.header}>
        <View style={styles.headerMain}>
          <Animated.View
            style={{ transform: [{ translateX: designAnimation }] }}
          >
            <EditProfileDesign width={330} height={330} />
          </Animated.View>
          <LinearGradient
            colors={["#000000", "#13AD9D"]}
            start={{ x: 0.5, y: 0.1 }}
            end={{ x: 0.9, y: 1.1 }}
            style={styles.headerCircleGradient}
          >
            <Animated.View style={{ transform: [{ translateY: pic }] }}>
              <TouchableOpacity
                onPress={openGallery}
                style={styles.imageTouchable}
              >
                {!image ? (
                  <Image
                    source={{
                      uri: user.photoURL,
                    }}
                    style={styles.userImage}
                  />
                ) : (
                  <AddPic width={80} height={80} />
                )}
              </TouchableOpacity>
            </Animated.View>
          </LinearGradient>
        </View>
      </KeyboardAvoidingView>
    );
  }
  function textInputs() {
    const firstName = useRef(new Animated.Value(0)).current;
    const lastName = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(firstName, {
        toValue: 500,
        duration: 5000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
      Animated.timing(lastName, {
        toValue: 800,
        duration: 8000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    });
    return (
      <KeyboardAvoidingView style={styles.textInputs}>
        <Animated.View
          style={[
            styles.firstName,
            {
              opacity: firstName.interpolate({
                inputRange: [0, 100, 200, 300, 400, 500],
                outputRange: [0, 0, 0, 0, 0.8, 1],
              }),
            },
          ]}
        >
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#6B6B6B"
            style={styles.firstNameTextInput}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.lastName,
            {
              opacity: lastName.interpolate({
                inputRange: [0, 100, 200, 300, 400, 500, 600, 700, 800],
                outputRange: [0, 0, 0, 0, 0, 0, 0, 0.8, 1],
              }),
            },
          ]}
        >
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#6B6B6B"
            style={styles.lastNameTextInput}
          />
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
  function submitButton() {
    const button = useRef(new Animated.Value(0)).current;

    Animated.timing(button, {
      toValue: 800,
      duration: 12000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    function updateDetails() {
      console.log("Update Details");
    }
    return (
      <Animated.View
        style={[
          styles.submitButton,
          {
            opacity: button.interpolate({
              inputRange: [0, 100, 200, 300, 400, 500, 600, 700, 800],
              outputRange: [0, 0, 0, 0, 0, 0, 0, 0.8, 1],
            }),
          },
        ]}
      >
        <TouchableOpacity
          onPress={updateDetails}
          style={styles.submitBtnTouchable}
        >
          <Text style={styles.textChanges}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>Go Back</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.main}>
      {header()}
      {textInputs()}
      {submitButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background.color1,
  },

  header: {
    width: "100%",
    height: "40%",
    backgroundColor: Colors.background.color1,
  },

  headerMain: {
    position: "absolute",
    top: "-20%",
    left: "23%",
  },
  headerCircleGradient: {
    position: "absolute",
    top: "50%",
    left: "0%",
    width: "51%",
    height: "51%",
    backgroundColor: "red",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageTouchable: {
    justifyContent: "center",
    alignItems: "center",
  },

  userImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  textInputs: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    paddingTop: "20%",
  },

  firstName: {
    width: "100%",
    paddingHorizontal: "12.5%",
  },
  firstNameTextInput: {
    width: "100%",

    borderBottomWidth: 1,
    borderColor: Colors.secondary.color1,
    color: Colors.secondary.color1,
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h3 - 2,
    paddingBottom: 10,
  },
  lastName: {
    width: "100%",
    paddingHorizontal: "12.5%",
    marginTop: 30,
  },
  lastNameTextInput: {
    width: "100%",

    borderBottomWidth: 1,
    borderColor: Colors.secondary.color1,
    color: Colors.secondary.color1,
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h3 - 2,
    paddingBottom: 10,
  },

  submitButton: {
    width: "100%",
    height: "20%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  submitBtnTouchable: {
    width: "75%",
    height: "35%",
    borderWidth: 2,
    borderColor: Colors.secondary.color2,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  textChanges: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h3,
    color: Colors.secondary.color2,
  },
  textBack: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h4,
    color: "#6B6B6B",
    marginTop: 10,
  },
});

export default EditProfile;
