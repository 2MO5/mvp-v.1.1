import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import { Shadow } from "react-native-shadow-2";
import Layout from "../constants/Layout";
import { FlatList } from "react-native";
import Constants from "../constants/Constants";
import { SvgImage } from "./SvgImage";
import { useNavigation } from "@react-navigation/native";

const MainDashboardCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Shadow distance={Layout.height < 545 ? 8 : 11} offset={[5, -2]}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          pagingEnabled
          scrollEventThrottle={15}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Constants.MainDashboardCards}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <Shadow distance={Layout.height < 545 ? 1 : 11} offset={[5, 2]}>
                <View
                  style={[
                    styles.mainCardContainer,
                    {
                      marginHorizontal:
                        index == 0
                          ? Layout.margin.margin4 - 20
                          : index == 1
                          ? Layout.margin.margin4 - 5
                          : Layout.margin.margin4 - 25,
                    },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate(`${item.screen}`)}
                  >
                    <View style={styles.cardMain}>
                      <View style={styles.cardContainer}>
                        <SvgImage
                          source={item.source}
                          width={item.width}
                          height={item.height}
                        />
                      </View>

                      <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </Shadow>
            );
          }}
        />
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    height: "100%",
    width: Layout.width,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
  },
  cardMain: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // backgroundColor: "red",
    paddingVertical: 100,
  },
  mainCardContainer: {
    width: Layout.width * 0.7,
    height: "85%",
    borderRadius: 25,
    backgroundColor: Colors.primary.color1,

    elevation: 26,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  textContainer: {
    minHeight: "20%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "red",
    paddingBottom: 35,
  },

  titleText: {
    fontFamily: Typography.family.AbrilFatface.regular,
    fontSize:
      Layout.height > 545
        ? Typography.fontSize.Largest - 20
        : Typography.fontSize.Largest - 10,
  },
});

export default MainDashboardCard;
