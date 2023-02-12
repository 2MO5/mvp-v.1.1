import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import Typography from "../../constants/Typography";
import Swiper from "react-native-deck-swiper";
import cards from "../../dummyData/friends";

const NewFriends = ({ navigation }: any) => {
  const swipeRef = useRef();
  const translate = useRef(new Animated.Value(1000)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [friends, setFriends] = useState(0);

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%"], []);
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  function openBottomSheet() {
    bottomSheetRef.current?.present();
  }

  useEffect(() => {
    Animated.timing(translate, {
      toValue: 0,
      delay: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={styles.main}>
      <View style={styles.swiper}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={cards}
          stackSize={5}
          cardIndex={0}
          verticalSwipe={false}
          onSwipedRight={() => {
            console.warn("Swiped MATCH");
            setFriends(friends + 1);
          }}
          onSwipedLeft={() => {
            console.warn("Swiped PASS");
          }}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                textAlign: "right",
                color: "red",
              },
            },
            right: {
              title: "MATCH",
              style: {
                color: "#4DED30",
              },
            },
          }}
          animateCardOpacity
          renderCard={(card) => {
            return (
              <Animated.View
                key={card.id}
                style={[
                  styles.cardView,
                  {
                    transform: [{ translateY: translate }],
                  },
                ]}
              >
                <Image style={styles.cardImage} source={{ uri: card.avatar }} />
              </Animated.View>
            );
          }}
        />
      </View>

      {friends ? (
        <Animated.View
          style={[
            styles.textMainContainer,
            {
              opacity,
            },
          ]}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Your Friends</Text>
          </View>
          <View style={styles.yourFriendsTab}>
            <TouchableOpacity
              onPress={() => navigation.navigate("YourFriends")}
            >
              <View style={styles.tabTextContainer}>
                <Text style={styles.tabText}>{friends}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background.color1,
  },
  swiper: {
    flex: 1,
    backgroundColor: Colors.background.color1,
  },
  cardView: {
    backgroundColor: "#ffffff",
    height: "90%",
    borderRadius: 24,
  },
  cardImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    borderRadius: 24,
  },
  textMainContainer: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
    marginLeft: 15,
  },
  text: {
    fontFamily: Typography.family.Raleway.regular,
    fontSize: Typography.fontSize.h2,
    color: Colors.tint.white,
  },
  yourFriendsTab: {
    width: "40%",
    height: "100%",
    paddingLeft: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tabTextContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: Colors.secondary.color1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontFamily: Typography.family.Raleway.bold,
    marginBottom: 2,
  },
});

export default NewFriends;
