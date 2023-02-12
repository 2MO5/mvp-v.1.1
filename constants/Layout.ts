import { Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  width,
  height,

  margin: {
    margin1: wp("2.5%"),
    margin2: wp("5%"),
    margin3: wp("10%"),
    margin4: wp("20%"),
    margin5: wp("25%"),
    margin6: wp("30%"),
    margin7: wp("40%")
  },

  padding:{
    padding1: wp("2.5%"),
    padding2: wp("5%"),
    padding3: wp("10%"),
    padding4: wp("20%"),
    padding5: wp("25%"),
    padding6: wp("30%"),
    padding7: wp("40%")
  },

  isSmallDevice: width < 375,
}