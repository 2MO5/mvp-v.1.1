import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextChatBg } from "../../constants/svgs/Friends/TextChatBg";
import { TextChatBackground } from "../../constants/svgs/Friends/TextChatBackground";
import { BackBtn } from "../../constants/svgs/Friends/BackBtn";
import Typography from "../../constants/Typography";
import Colors from "../../constants/Colors";
import { KeyboardAvoidingView } from "react-native";
import { Send } from "../../constants/svgs/Friends/Send";
import Constants from "../../constants/Constants";
import { Smiley } from "../../constants/svgs/MainDashboard/Smiley";
import { Attachment } from "../../constants/svgs/Friends/Attachment";
import { Mic } from "../../constants/svgs/Friends/Mic";
import messages from "../../dummyData/messages";
import MessageSender from "../../components/Friends/MessageSender";
import MessageReceiver from "../../components/Friends/MessageReceiver";

const TextChatScreen = ({ navigation }: any) => {
  const [message, setMessage] = useState();
  const [typing, setTyping] = useState(false);

  function header() {
    return (
      <View style={styles.headerMain}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.bacbtn}
        >
          <BackBtn width={24} height={20} />
        </TouchableOpacity>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>Daphnie Chiu</Text>
          <Text style={styles.lastSeen}> Last Seen 3 minutes ago</Text>
        </View>
        <View style={styles.userPicContainerMain}>
          <View style={styles.userPicContainer}>
            <Image
              source={{
                uri: "https://image.shutterstock.com/image-photo/close-shot-adorable-african-american-260nw-1042917214.jpg",
              }}
              style={styles.userPic}
            />
          </View>
        </View>
      </View>
    );
  }

  function chatbox() {
    return (
      <View style={styles.chatboxMain}>
        <FlatList
          data={messages}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View>
                {item.name === "Jiale" ? (
                  <MessageSender text={item.message} />
                ) : (
                  <MessageReceiver avatar={item.avatar} text={item.message} />
                )}
              </View>
            );
          }}
        />
      </View>
    );
  }

  function messageInput() {
    const sendMessage = () => {
      console.log(message);
    };

    const textChange = (event: string) => {
      console.log(event);

      if (event) {
        console.log("You got an event!");
        setTyping(true);
      } else {
        console.log("Nope not yet!");
        setTyping(false);
      }
    };

    return (
      <View style={styles.messageInputMain}>
        <KeyboardAvoidingView style={styles.textInputView}>
          <TextInput
            value={message}
            onChangeText={textChange}
            multiline={true}
            style={styles.textInput}
          ></TextInput>
          {typing ? (
            <TouchableOpacity onPress={sendMessage}>
              <Send width={30} height={30} />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            onPress={() => console.log("Emoji Time!")}
            style={[
              styles.emoji,
              {
                left: !typing ? "13%" : "8%",
              },
            ]}
          >
            <Smiley width={18} height={18} />
          </TouchableOpacity>
          {typing ? null : (
            <TouchableOpacity
              onPress={() => console.log("Let's Attach!")}
              style={[
                styles.attachments,
                {
                  right: typing ? -1000 : 55,
                },
              ]}
            >
              <Attachment width={23} height={23} />
            </TouchableOpacity>
          )}
          {typing ? null : (
            <TouchableOpacity
              onPress={() => console.log("Let's record!")}
              style={[
                styles.attachments,
                {
                  right: typing ? -1000 : 15,
                },
              ]}
            >
              <Mic width={23} height={23} />
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#01493D", "#040006"]}
      style={{ flex: 1, width: "100%" }}
      start={{ x: -0.501, y: 0.2 }}
      end={{ x: 0.9, y: 1.01 }}
    >
      <View style={{ position: "relative", top: "-20%" }}>
        <TextChatBackground width="100%" height="120%" />
      </View>
      {header()}
      {chatbox()}
      {messageInput()}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  //header
  headerMain: {
    width: "100%",
    height: "10%",
    marginTop: "4%",
    flexDirection: "row",
    position: "absolute",
    top: -10,
  },
  bacbtn: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  userContainer: {
    height: "100%",
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  userName: {
    fontFamily: Typography.family.Raleway.black,
    fontSize: Typography.fontSize.h3 - 2,
    color: Colors.primary.color1,
    paddingHorizontal: "20%",
  },
  lastSeen: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h5 - 2,
    color: Colors.tint.white,

    paddingHorizontal: "20%",
  },
  userPicContainerMain: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  userPicContainer: {
    height: "70%",
    width: "70%",
    borderRadius: 100,
  },
  userPic: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  //chatbox
  chatboxMain: {
    width: "100%",
    height: "70%",
    marginTop: "4%",
    position: "absolute",
    bottom: "20%",
  },
  //messageInput

  messageInputMain: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputView: {
    width: "100%",
    height: "50%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    height: 50,
    backgroundColor: "#007361",
    width: "82%",
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 40,
    color: Colors.primary.color1,
  },
  emoji: {
    position: "absolute",
    top: "40%",
  },
  attachments: {
    position: "absolute",
    top: "35%",
  },
});

export default TextChatScreen;
