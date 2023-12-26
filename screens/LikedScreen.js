import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LikedScreen = () => {
  return (
    <View style={styles.iphone1313Pro6}>
      <Text style={[styles.favorites, styles.iconsFlexBox]}>Yêu thích</Text>
      <View style={styles.iphone1313ShadowBox} />
      <View style={[styles.rectangleView, styles.heart22Position]} />
      <Image
        style={[styles.heart22, styles.heart22Position]}
        resizeMode="cover"
        source={require("../assets/screens/liked/heart2.png")}
      />
      <View style={styles.iphone1313ChildShadowBox} />
      <Image
        style={[styles.fire2Icon, styles.fire2IconPosition]}
        resizeMode="cover"
        source={require("../assets/screens/liked/heart.png")}
      />
      <View style={[styles.iphone1313Pro6Child3, styles.heart23Position]} />
      <Image
        style={[styles.heart23, styles.heart23Position]}
        resizeMode="cover"
        source={require("../assets/screens/liked/heart2.png")}
      />
      <View style={styles.iphone1313ShadowBox} />
      <Text style={[styles.min, styles.minTypo]}>500</Text>
      <Image
        style={[styles.fire1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/screens/liked/heart.png")}
      />
      <Image
        style={[styles.clock1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/screens/liked/bookmark.png")}
      />
      <Text style={[styles.kcal, styles.minTypo]}>350</Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/screens/liked/3.png")}
      />
      <View style={[styles.rectangleView, styles.heart22Position]} />
      <Image
        style={[styles.heart22, styles.heart22Position]}
        resizeMode="cover"
        source={require("../assets/screens/liked/heart2.png")}
      />
      <View style={styles.iphone1313ChildShadowBox} />
      <Text style={[styles.min1, styles.min1Typo]}>1000</Text>
      <Image
        style={[styles.clock2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/screens/liked/bookmark.png")}
      />
      <Text style={[styles.kcal1, styles.min1Typo]}>750</Text>
      <Image
        style={[styles.iphone1313Pro6Child2, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/screens/liked/1.png")}
      />
      <View style={[styles.iphone1313Pro6Child3, styles.heart23Position]} />
      <Image
        style={[styles.heart23, styles.heart23Position]}
        resizeMode="cover"
        source={require("../assets/screens/liked/heart2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  heartIconCommon: {
    opacity: 0.5,
    overflow: "hidden",
  },
  iconLayout2: {
    height: 24,
    width: 24,
    top: 723,
    position: "absolute",
  },
  minTypo: {
    color: Color.colorGray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    top: 355,
    textAlign: "left",
    position: "absolute",
  },
  huevosRancherosTypo: {
    height: 26,
    width: 154,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  iconLayout1: {
    height: 13,
    width: 11,
    opacity: 0.5,
    overflow: "hidden",
  },
  iconLayout: {
    height: 12,
    width: 12,
    opacity: 0.5,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconLayout: {
    height: 2,
    width: 2,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 200,
    width: 135,
    top: 145,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  heart22Position: {
    width: 22,
    left: 156,
    top: 151,
    height: 24,
    position: "absolute",
  },
  min1Typo: {
    top: 355,
    color: Color.colorGray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  fire2IconPosition: {
    left: 240,
    position: "absolute",
  },
  heart23Position: {
    left: 345,
    width: 22,
    top: 151,
    height: 24,
    position: "absolute",
  },
  favorites: {
    top: 68,
    left: 165,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandBold,
  },
  icons: {
    top: 1227,
    left: -97,
    fontSize: 40,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    width: 66,
    height: 41,
  },
  bookmark1Icon: {
    left: 143,
    height: 24,
    width: 24,
    top: 723,
    position: "absolute",
  },
  heart1Icon: {
    left: 228,
    overflow: "hidden",
  },
  add1Icon: {
    top: 718,
    left: 313,
    width: 36,
    height: 33,
    position: "absolute",
  },
  home2Icon: {
    left: 55,
    height: 24,
    width: 24,
    top: 723,
    position: "absolute",
  },
  iphone1313ShadowBox: {
    height: 250,
    width: 146,
    borderWidth: 1,
    borderColor: "black",
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    left: 45,
    top: 140,
    position: "absolute",
  },
  min: {
    left: 150,
  },
  chorizoMozzarella: {
    top: 244,
    left: 53,
    position: "absolute",
  },
  fire1Icon: {
    top: 355,
    left: 53,
    position: "absolute",
  },
  clock1Icon: {
    top: 355,
    left: 135,
  },
  kcal: {
    left: 67,
  },
  iphone1313Pro6Inner: {
    top: 293,
    left: 108,
  },
  rectangleIcon: {
    left: 51,
  },
  rectangleView: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
  },
  heart22: {
    opacity: 0.5,
    overflow: "hidden",
  },
  iphone1313ChildShadowBox: {
    left: 230,
    top: 141,
    height: 250,
    width: 146,
    borderWidth: 1,
    borderColor: "black",
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  min1: {
    left: 330,
  },
  huevosRancheros: {
    top: 247,
    height: 26,
    width: 154,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  fire2Icon: {
    top: 355,
    height: 13,
    width: 11,
    opacity: 0.5,
    overflow: "hidden",
  },
  clock2Icon: {
    top: 355,
    left: 315,
  },
  kcal1: {
    left: 255,
  },
  ellipseIcon: {
    top: 296,
    left: 273,
  },
  iphone1313Pro6Child2: {
    left: 236,
  },
  iphone1313Pro6Child3: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
  },
  heart23: {
    opacity: 0.5,
    overflow: "hidden",
  },
  iphone1313Pro6: {
    borderRadius: 44,
    flex: 1,
    width: "100%",
    height: 793,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LikedScreen;
