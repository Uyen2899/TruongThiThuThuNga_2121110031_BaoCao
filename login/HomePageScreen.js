import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text, TouchableOpacity, Animated, Easing } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useState, useEffect } from "react";

const HomePageScreen = ({ navigation }) => {
const [fadeAnim] = useState(new Animated.Value(0));
    useEffect(() => {
    const startAnimationTimeout = setTimeout(() => { Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    easing: Easing.linear,
    useNativeDriver: true,
    }).start();
    }, 500);
    return () => clearTimeout(startAnimationTimeout)
    }, []);

  return (
    <View style={[styles.homePage, styles.homePageShadowBox]}>
      <Animated.View style={[styles.homePage, { transform: [{ translateY: fadeAnim }] }]}>
      <Image
        style={[styles.backgroundIcon, styles.backgroundIconPosition]}
        resizeMode="cover"
        source={require("../assets/screens/login/img/background1.png")}
      />
      <View style={[styles.getStarted, styles.getLayout]}>
        <TouchableOpacity
          style={[styles.getStartedChild, styles.getLayout]}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.getStartedText}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <Text style={[styles.loremConsequatDuisContainer, styles.logoLayout]}>
          <Text style={styles.loremConsequatDuisContainer1}>
            <Text style={styles.lorem}>{`Let's Get Started
`}</Text>
            <Text
              style={styles.consequatDuisEnim}
            >{`Mua những thứ bạn yêu`}</Text>
          </Text>
        </Text>
        <Image
          style={styles.lsyapcasialogomarkIcon}
          resizeMode="cover"
          source={require("../assets/screens/login/img/smiles-are-everywhere.png")}
        />
        <Image
          style={styles.img1}
          resizeMode="cover"
          source={require("../assets/screens/login/img/rectangle10.png")}
        />
      </View>
      </Animated.View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  homePageShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  backgroundIconPosition: {
    top: 0,
    left: 0,
  },
  getLayout: {
    height: 60,
    width: 144,
    position: "absolute",
  },
  getStarted1FlexBox: {
    alignItems: "center",
    display: "flex",
  },
  logoLayout: {
    width: 192,
    position: "absolute",
  },
  backgroundIcon: {
    width: 769,
    height: 1130,
    left: 0,
    position: "absolute",
  },
  getStartedChild: {
    borderRadius: 10,
    backgroundColor: "rgba(47, 128, 237, 0)",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    left: 0,
    top: 0,
    // shadowOpacity: 1,
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
  },
  getStarted1: {
    top: 10,
    left: 2,
    //letterSpacing: -0.4,
    color: Color.colorWhite,
    padding: 5,
    textAlign: "center",
    justifyContent: "center",
    width: 142,
    height: 40,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: 20,
    position: "absolute",
  },
  getStarted: {
    top: 700,
    left: 220,
  },
  lorem: {
    fontSize: 36,
    fontFamily: FontFamily.quicksandBold,
  },
  consequatDuisEnim: {
    fontWeight: "300",
    fontFamily: FontFamily.quicksandRegular,
    fontSize: 16,
  },
  loremConsequatDuisContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  loremConsequatDuisContainer: {
    top: 78,
    color: "black",
    textAlign: "left",
    height: 120,
    alignItems: "center",
    display: "flex",
    left: 0,
  },
  lsyapcasialogomarkIcon: {
    top: -200,
    left: 1,
    width: 200,
    height: 150,
    position: "absolute",
    overflow: "hidden",
  },
  logo: {
    top: 412,
    left: 50,
    height: 187,
  },
  homePage: {
    borderRadius: 30,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 40,
    elevation: 40,
    flex: 1,
    height: 823,
    overflow: "hidden",
    width: "100%",
  },
  img1: {
    position: "absolute",
    top: 0,
    left: 160,
  },
  getStartedChild: {
    borderRadius: 10,
    backgroundColor: "rgba(47, 128, 237, 0)",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  getStartedText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontSize: 20,
    padding: 5,
    textAlign: "center",
  },
});

export default HomePageScreen;
