import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import LoginScreen from "../screens/Authentication/LoginScreen";
import OnboardingScreen from "../screens/Authentication/OnboardingScreen";
import RegisterScreen from "../screens/Authentication/RegisterScreen";
import WelcomeScreen from "../screens/Authentication/WelcomeScreen";

import AddPostScreen from "../screens/Community/AddPostScreen";
import CommunityDashboard from "../screens/Community/CommunityDashboard";
import MainDashboard from "../screens/Main/MainDashboard";
import PostDisplayScreen from "../screens/Community/PostDisplayScreen";

import FriendsMenu from "../screens/Friends/FriendsMenu";
import NewFriends from "../screens/Friends/NewFriends";
import YourFriends from "../screens/Friends/YourFriends";

import TalentDashboard from "../screens/Talent/TalentDashboard";
import TalentMain from "../screens/Talent/TalentMain";
import TalentMenu from "../screens/Talent/TalentMenu";
import TalentUpload from "../screens/Talent/TalentUpload";

import UniversityMain from "../screens/University/UniversityMain";
import UniversityMenu from "../screens/University/UniversityMenu";
import UniversityVideo from "../screens/University/UniversityVideo";
import UniversityWritten from "../screens/University/UniversityWritten";
import WelcomeHome from "../screens/Authentication/WelcomeHome";
import NotificationScreen from "../screens/Main/NotificationScreen";
import useAuth from "../hooks/useAuth2";
import ProfileScreen from "../screens/Main/ProfileScreen";
import Entertainment from "../screens/University/Entertainment";
import Movies from "../screens/Entertainment/Movies";
import Games from "../screens/Entertainment/Games";
import EntertainmentDashboard from "../screens/Entertainment/EntertainmentDashboard";
import EditProfile from "../screens/Main/EditProfile";
import AudioCallScreen from "../screens/Friends/AudioCallScreen";
import VideoCallScreen from "../screens/Friends/VideoCallScreen";
import TextChatScreen from "../screens/Friends/TextChatScreen";
import VideoLesson from "../screens/University/VideoLesson";
import FullScreenPost from "../screens/Community/FullScreenPost";
import CallScreen from "../screens/Friends/CallScreen";
import WrittenLesson from "../screens/University/WrittenLesson";

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

//for main ones keep the default animation. For the rest use the animation: "slide_from_right"

export default function Navigation() {
  // const [user, setUser] = React.useState<Boolean>(false);

  const { user } = useAuth();
  console.log("@navigation: ", user);
  return (
    <Stack.Navigator initialRouteName="Main">
      {user ? (
        <Stack.Screen
          name="Main"
          component={MainStackComponent}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStackComponent}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

const MainStackComponent = () => {
  return (
    <MainStack.Navigator initialRouteName="WelcomeHome">
      <MainStack.Screen
        name="WelcomeHome"
        component={WelcomeHome}
        options={{ headerShown: false, orientation: "portrait" }}
      />
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
          orientation: "portrait",
        }}
      />
      <MainStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <MainStack.Screen
        name="MainDashboard"
        component={MainDashboard}
        options={{
          headerShown: false,
          orientation: "portrait",
          gestureEnabled: "false",
        }}
      />
      <MainStack.Screen
        name="Community"
        component={CommunityStackComponent}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <MainStack.Screen
        name="Friends"
        component={FriendsStackComponent}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <MainStack.Screen
        name="Talent"
        component={TalentStackComponent}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <MainStack.Screen
        name="University"
        component={UniversityStackComponent}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <MainStack.Screen
        name="Entertainment"
        component={EntertainmentStackComponent}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <MainStack.Screen
        name="Soon"
        component={Entertainment}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />

      <MainStack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
          orientation: "portrait",
        }}
      />
    </MainStack.Navigator>
  );
};

const AuthStackComponent = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false, orientation: "portrait" }}
    >
      <AuthStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const CommunityStack = createNativeStackNavigator();
const FriendsStack = createNativeStackNavigator();
const TalentStack = createNativeStackNavigator();
const EntertainmentStack = createNativeStackNavigator();
const UniversityStack = createNativeStackNavigator();

function CommunityStackComponent() {
  return (
    <CommunityStack.Navigator
      screenOptions={{ headerShown: false, orientation: "portrait" }}
    >
      <CommunityStack.Screen
        name="CommunityDashboard"
        component={CommunityDashboard}
        options={{
          animation: "slide_from_right",
        }}
      />
      <CommunityStack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          animation: "slide_from_right",
        }}
      />
      <CommunityStack.Screen
        name="PostDisplay"
        component={PostDisplayScreen}
        options={{ animation: "slide_from_right" }}
      />
      <CommunityStack.Screen name="FullScreenPost" component={FullScreenPost} />
    </CommunityStack.Navigator>
  );
}
function FriendsStackComponent() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name="FriendsDashboard"
        component={FriendsMenu}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <FriendsStack.Screen
        name="NewFriends"
        component={NewFriends}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <FriendsStack.Screen
        name="YourFriends"
        component={YourFriends}
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <FriendsStack.Screen
        name="AudioCall"
        component={AudioCallScreen}
        options={{ headerShown: false }}
      />
      <FriendsStack.Screen
        name="CallScreen"
        component={CallScreen}
        options={{ headerShown: false }}
      />
      <FriendsStack.Screen
        name="VideoCall"
        component={VideoCallScreen}
        options={{ headerShown: false }}
      />
      <FriendsStack.Screen
        name="TextChat"
        component={TextChatScreen}
        options={{ headerShown: false }}
      />
    </FriendsStack.Navigator>
  );
}
function TalentStackComponent() {
  return (
    <TalentStack.Navigator>
      <TalentStack.Screen
        name="TalentDashboard"
        component={TalentDashboard}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <TalentStack.Screen
        name="TalentMain"
        component={TalentMain}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <TalentStack.Screen
        name="TalentMenu"
        component={TalentMenu}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <TalentStack.Screen
        name="TalentUpload"
        component={TalentUpload}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </TalentStack.Navigator>
  );
}
function UniversityStackComponent() {
  return (
    <UniversityStack.Navigator>
      <UniversityStack.Screen
        name="UniversityDashboard"
        component={UniversityMain}
        options={{ headerShown: false, orientation: "portrait" }}
      />
      <UniversityStack.Screen
        name="UniversityMenu"
        component={UniversityMenu}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <UniversityStack.Screen
        name="UniversityVideo"
        component={UniversityVideo}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
      <UniversityStack.Screen
        name="VideoLesson"
        component={VideoLesson}
        options={{ headerShown: false, orientation: "all" }}
      />
      <UniversityStack.Screen
        name="WrittenLesson"
        component={WrittenLesson}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <UniversityStack.Screen
        name="UniversityWritten"
        component={UniversityWritten}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          orientation: "portrait",
        }}
      />
    </UniversityStack.Navigator>
  );
}

function EntertainmentStackComponent() {
  return (
    <EntertainmentStack.Navigator>
      <EntertainmentStack.Screen
        name="EntertainmentDashboard"
        component={EntertainmentDashboard}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <EntertainmentStack.Screen
        name="EntertainmentMovies"
        component={Movies}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <EntertainmentStack.Screen
        name="EntertainmentGames"
        component={Games}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </EntertainmentStack.Navigator>
  );
}
