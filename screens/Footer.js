import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Home from "./Home";
import LikedScreen from "./LikedScreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#FF937B', // Màu cho tab đang được chọn
      inactiveTintColor: 'gray', // Màu cho tab không được chọn
      style: {
        backgroundColor: 'white', // Màu nền của tab bar
      },
    }}
  >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/screens/home/img/home.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Tìm kiếm',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/screens/home/img/search1.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Yêu thích',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/screens/home/img/heart.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/screens/home/img/user.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
    iconLayout1: {
      height: 24,
      width: 24,
      position: "absolute",
      overflow: "hidden",
    },
    groupChildBg: {
      backgroundColor: Color.colorLightsalmon,
      position: "absolute",
      borderRadius: 20,
    },
    searchPosition: {
      opacity: 0.2,
      position: "absolute",
    },
    iconLayout: {
      top: 215,
      height: 24,
      width: 24,
      overflow: "hidden",
    },
    homeInnerLayout: {
      width: 152,
      borderRadius: Border.br_mini,
      left: 27, // Cộng thêm 10
      position: "absolute",
    },
    homeChildLayout: {
      height: 190,
      left: 206, // Cộng thêm 10
      width: 152,
      borderRadius: Border.br_mini,
      position: "absolute",
    },
    homeChild3Layout: {
      height: 40,
      width: 40,
      left: 140, // Cộng thêm 10
      position: "absolute",
      backgroundColor: Color.colorWhite,
      borderRadius: 20,
    },
    homeChildPosition: {
      left: 309, // Cộng thêm 10
      height: 40,
      width: 40,
      position: "absolute",
      backgroundColor: Color.colorWhite,
      borderRadius: 20,
    },
    heartIconLayout: {
      height: 18,
      width: 18,
      left: 151, // Cộng thêm 10
      position: "absolute",
      overflow: "hidden",
    },
    heartIconPosition: {
      left: 320, // Cộng thêm 10
      height: 18,
      width: 18,
      position: "absolute",
      overflow: "hidden",
    },
    cottonTypo: {
      fontSize: FontSize.size_base,
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.quicksandBold,
      fontWeight: "500",
      position: "absolute",
    },
    textTypo: {
      fontSize: FontSize.size_xl,
      fontFamily: FontFamily.quicksandBold,
      fontWeight: "700",
      textAlign: "left",
      color: Color.colorBlack,
      position: "absolute",
    },
    bottomLayout: {
      height: 144,
      width: 539,
      position: "absolute",
    },
    home1Typo: {
      textAlign: "center",
      fontSize: FontSize.size_xs,
      top: 57,
      fontFamily: FontFamily.quicksandMedium,
      fontWeight: "500",
      position: "absolute",
    },
    hiSelina: {
      top: 43,
      left: 94, // Cộng thêm 10
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.quicksandBold,
      fontWeight: "500",
      fontSize: FontSize.size_sm,
      position: "absolute",
    },
    findTheBest: {
      top: 119,
      fontSize: 24,
      fontFamily: FontFamily.quicksandBold,
      fontWeight: "700",
      left: 37, // Cộng thêm 10
      textAlign: "left",
      color: Color.colorBlack,
      position: "absolute",
    },
    homeChild: {
      width: 42,
      height: 42,
      top: 29,
      left: 37, // Cộng thêm 10
      position: "absolute",
    },
    shoppingBagIcon: {
      top: 8,
      left: 10, // Cộng thêm 10
    },
    groupChild: {
      left: 22, // Cộng thêm 10
      borderStyle: "solid",
      borderColor: Color.colorWhite,
      borderWidth: 2,
      width: 20,
      height: 20,
      top: 0,
    },
    text: {
      top: 4,
      left: 29, // Cộng thêm 10
      fontSize: 10,
      fontFamily: FontFamily.robotoMedium,
      color: Color.colorWhite,
      textAlign: "left",
      fontWeight: "500",
      position: "absolute",
    },
    shoppingBagParent: {
      top: 30,
      left: 326, // Cộng thêm 10
      width: 32,
      height: 32,
      position: "absolute",
    },
    homeItem: {
      top: 202,
      backgroundColor: "#e8e8e8",
      width: 321,
      height: 50,
      borderRadius: Border.br_mini,
      left: 37, // Cộng thêm 10
      position: "absolute",
    },
    searchIcon: {
      left: 54, // Cộng thêm 10
      top: 215,
      height: 24,
      width: 24,
      overflow: "hidden",
    },
    search: {
      top: 218,
      left: 92, // Cộng thêm 10
      fontFamily: FontFamily.quicksandRegular,
      textAlign: "left",
      color: Color.colorBlack,
      fontSize: FontSize.size_sm,
      opacity: 0.2,
    },
    slidersIcon: {
      left: 316, // Cộng thêm 10
      position: "absolute",
    },
    homeInner: {
      height: 248,
      top: 282,
      left: 10, // Cộng thêm 10
    },
    rectangleIcon: {
      top: 620,
      left: 10, // Cộng thêm 10
      height: 191,
    },
    homeChild1: {
      top: 282,
      left: 10, // Cộng thêm 10
    },
    homeChild2: {
      top: 565,
      left: 10, // Cộng thêm 10
    },
    ellipseView: {
      top: 292,
      left: 10, // Cộng thêm 10
    },
    homeChild3: {
      top: 630,
      left: 10, // Cộng thêm 10
    },
    homeChild4: {
      top: 292,
      left: 10, // Cộng thêm 10
    },
    homeChild5: {
      top: 575,
      left: 10, // Cộng thêm 10
    },
    heartIcon: {
      top: 303,
      left: 10, // Cộng thêm 10
    },
    heartIcon1: {
      top: 641,
      left: 10, // Cộng thêm 10
    },
    heartIcon2: {
      top: 303,
      left: 10, // Cộng thêm 10
    },
    heartIcon3: {
      top: 586,
      left: 10, // Cộng thêm 10
    },
    cottonQueenT: {
      top: 541,
      left: 37, // Cộng thêm 10
    },
    cottonStyleT: {
      top: 483,
      left: 206, // Cộng thêm 10
    },
    greyTShirt: {
      top: 766,
      left: 206, // Cộng thêm 10
    },
    text1: {
      top: 566,
      left: 37, // Cộng thêm 10
    },
    text2: {
      top: 508,
      left: 206, // Cộng thêm 10
    },
    text3: {
      top: 791,
      left: 206, // Cộng thêm 10
    },
    bottomNavChild: {
      top: 0,
      left: 0,
      //backgroundColor: Color.colorWhite,
      height: 144,
      width: 539,
    },
    heartIcon4: {
      top: 32,
      left: 325, // Cộng thêm 10
    },
    homeIcon: {
      left: 135, // Cộng thêm 10
      top: 29,
    },
    searchIcon1: {
      left: 227, // Cộng thêm 10
      top: 29,
    },
    userIcon: {
      left: 404, // Cộng thêm 10
      top: 29,
    },
    home1: {
      left: 130, // Cộng thêm 10
      color: Color.colorLightsalmon,
    },
    bottomNavItem: {
      top: 85,
      left: 116, // Cộng thêm 10
      borderTopLeftRadius: Border.br_8xs,
      borderTopRightRadius: Border.br_8xs,
      width: 63,
      height: 4,
    },
    search1: {
      left: 220, // Cộng thêm 10
      color: Color.colorBlack,
    },
    liked: {
      left: 319, // Cộng thêm 10
      color: Color.colorBlack,
    },
    profile: {
      left: 398, // Cộng thêm 10
      color: Color.colorBlack,
    },
    bottomNav: {
      top: 723,
      left: -80, // Cộng thêm 10
    },
    home: {
      flex: 1,
      width: "100%",
      height: 812,
      overflow: "hidden",
      backgroundColor: Color.colorWhite,
    },
    ellipse26: {
      width: 539,
      height: 144,
      top: -35,
    },
  });

export default Footer;