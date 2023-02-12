import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const FullScreenPost = ({ route, navigation }) => {
  console.log(route);

  const { params } = route;

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background.color1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 10, marginLeft: 10 }}
      >
        <Ionicons name="chevron-back-sharp" size={35} color="#ffffffb0" />
      </TouchableOpacity>

      <Image
        source={{ uri: params.image }}
        style={{ width: width, height: height, marginTop: -10 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default FullScreenPost;
