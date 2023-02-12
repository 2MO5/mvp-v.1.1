import React from "react";
import { View, Text, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome Screen</Text>
      <Button
        title="To Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default WelcomeScreen;
