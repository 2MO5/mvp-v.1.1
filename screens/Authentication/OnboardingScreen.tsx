import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ImageBackground,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import TextButton from "../../components/TextButton";
import Colors from "../../constants/Colors";
import Constants from "../../constants/Constants";
// import Layout from "../../constants/Layout";
import Layout from "../../constants/Layout";
import { TopLogoOnboard } from "../../constants/svgs/Onboarding/TopLogOnboarding";
import Typography from "../../constants/Typography";
import useAuth from "../../hooks/useAuth";

const OnboardingScreen = (props: { navigation: any }) => {
  const { user } = useAuth();
  console.log(user);
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({ viewableItems, changed }: any) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, Layout.width);
    console.log(dotPosition);

    return (
      <View style={styles.dotsContainer}>
        {Constants.OnboardingScreens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              Colors.background.color2,
              Colors.background.variation5,
              Colors.background.color2,
            ],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot -${index}`}
              style={[
                styles.dots,
                {
                  width: dotWidth,
                  backgroundColor: dotColor,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  function renderTopLogo() {
    return (
      <View style={styles.logoContainer}>
        <TopLogoOnboard width={50} height={Layout.height > 545 ? 50 : 30} />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View style={styles.footerContainer}>
        {/* ===DOTS=== */}
        <View style={styles.theDotsView}>
          <Dots />
        </View>
        {/* <TextButton /> */}
        {/* Before the Last screen */}
        {currentIndex < Constants.OnboardingScreens.length - 1 && (
          <View style={styles.btnContainer}>
            <TextButton
              label="Skip"
              color1={"transparent"}
              color2={"transparent"}
              width={"100%"}
              buttonContainerStyle={styles.skipBtnContentContainer}
              labelStyle={styles.skipBtnLabel}
              onPress={() => props.navigation.replace("Register")}
            />
            <TextButton
              label="Next"
              width={"80%"}
              height={40}
              color1={Colors.background.variation6}
              color2={Colors.background.variation5}
              buttonContainerStyle={styles.nextBtnContentContainer}
              labelStyle={styles.nextBtnLabel}
              onPress={() => {
                let index = Math.ceil(Number(scrollX._value / Layout.width));
                flatListRef?.current?.scrollToIndex({
                  index: index + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}

        {/* At the Last screen */}
        {currentIndex == Constants.OnboardingScreens.length - 1 && (
          <View style={styles.startBtnContainer}>
            <TextButton
              label="Get Started"
              width={"200%"}
              height={60}
              color1={Colors.background.variation6}
              color2={Colors.background.variation5}
              buttonContainerStyle={styles.startBtnContentContainer}
              labelStyle={styles.startBtnLabel}
              onPress={() => props.navigation.navigate("Register")}
            />
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.main}>
      {/* ===LOGO==== */}
      {renderTopLogo()}
      {/* ===FLATLST==== */}
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={Constants.OnboardingScreens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: Layout.width }}>
              {/* ====Images==== */}
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    width: "102%",
                    height:
                      index == 1 && Layout.height > 545
                        ? "102%"
                        : Layout.height < 545
                        ? "105%"
                        : "100%",
                    marginTop: index == 1 ? -126 : -101,
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: Layout.height > 545 ? "80%" : "70%",
                      position: "absolute",
                      top:
                        Layout.height > 545 && index == 1
                          ? 230
                          : Layout.height < 545 && index == 0
                          ? 30
                          : Layout.height > 545 && index == 2
                          ? 210
                          : index == 1 && Layout.height > 545
                          ? 2
                          : 120,
                      left:
                        Layout.height < 545
                          ? 40
                          : index == 1
                          ? 30
                          : index == 2
                          ? 60
                          : null,
                    }}
                  />
                </ImageBackground>
              </View>
              {/* ====Title==== */}

              <View
                style={[
                  styles.titleContainer,
                  {
                    marginTop:
                      Layout.height < 600
                        ? index == 2
                          ? -Layout.padding.padding3
                          : 3
                        : -15,
                  },
                ]}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text
                  style={[
                    styles.description,
                    {
                      bottom:
                        index == 0
                          ? Layout.height > 700
                            ? Layout.margin.margin4
                            : Layout.margin.margin4 + 20
                          : Layout.margin.margin4 + 20,
                    },
                  ]}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {/* ===FOOTER==== */}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  //logo
  logoContainer: {
    position: "absolute",
    top: Layout.height > 800 ? 15 : 35,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  //main
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop:
      Layout.height < 545 ? -Layout.margin.margin5 : -Layout.margin.margin4,
  },
  dots: {
    borderRadius: 5,
    marginHorizontal: 6,
    height: 10,
  },

  theDotsView: {
    flex: 1,
    justifyContent: "center",
    marginTop: Layout.height < 545 ? 3 : 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: Layout.padding.padding1 - 30,
    marginVertical:
      Layout.height > 600
        ? Layout.margin.margin1 - 40
        : Layout.margin.margin1 - Layout.height * 0.08,
    paddingBottom: Layout.height > 545 ? 15 : 10,
  },
  skipBtnContentContainer: {
    width: Layout.height < 545 ? 160 : 190,
    height: Layout.height < 545 ? 16 : 22,
    backgroundColor: "transparent",
  },
  skipBtnLabel: {
    color: Colors.background.variation6,
    fontFamily: Typography.family.Raleway.medium,
    marginRight: Layout.width * 0.22,
  },
  nextBtnContentContainer: {
    width: Layout.height < 545 ? 160 : 190,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  nextBtnLabel: {
    color: Colors.tint.white,
    fontFamily: Typography.family.Raleway.medium,
  },
  startBtnContainer: {
    height: "100%",
    paddingHorizontal: Layout.padding.padding4 - 6,
    top: -50,

    paddingBottom: 1200,
  },
  startBtnLabel: {
    color: Colors.tint.white,
    fontFamily: Typography.family.Raleway.medium,
  },

  startBtnContentContainer: {
    width: Layout.height < 545 ? 180 : "100%",
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Layout.padding.padding2,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Layout.padding.padding2,
  },
  title: {
    fontFamily: Typography.family.Gilroy.bold,
    color: Colors.background.variation5,
    fontSize: Typography.fontSize.Largest,
    marginBottom: Layout.padding.padding7,
    marginTop:
      Layout.height < 545
        ? -Layout.margin.margin6 + 180
        : Layout.margin.margin7 - 40,
    zIndex: 100,
    height: Layout.height * 0.2,
  },
  description: {
    textAlign: "center",
    fontFamily: Typography.family.SFUIText.light,
    fontSize: Typography.fontSize.h4,
    top:
      Layout.height > 545
        ? -Layout.margin.margin7 - 92
        : -Layout.margin.margin7 - 62,
  },
  //footer
  footerContainer: {
    width: Layout.width,
    height: Layout.height * 0.1,
  },
});

export default OnboardingScreen;
