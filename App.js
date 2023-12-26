import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font"; // Import thư viện Expo Font
import { FontFamily } from "./GlobalStyles"; // Import FontFamily từ GlobalStyles


import Home from "./screens/Home";
import Details from "./screens/Details";
import Bag from "./screens/Bag";
import PayAndOrder from "./screens/PayAndOrder";
import OrderCompleted from "./screens/OrderCompleted";
import HomePageScreen from "./login/HomePageScreen";
import LoginScreen from "./login/LoginScreen";
import Register from "./login/Register";
import Footer from "./screens/Footer";


const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  // Sử dụng useFonts để cài đặt font
  const [fontsLoaded] = useFonts({
    [FontFamily.quicksandMedium]: require("./assets/fonts/Quicksand-Medium.ttf"),
    [FontFamily.quicksandBold]: require("./assets/fonts/Quicksand-Bold.ttf"),
    [FontFamily.quicksandRegular]: require("./assets/fonts/Quicksand-Regular.ttf"),
    [FontFamily.robotoMedium]: require("./assets/fonts/Roboto-Medium.ttf"),
    // Các font khác
  });

  React.useEffect(() => {
    // Simulate hiding the splash screen after some time (e.g., 3 seconds)
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 100);
  }, []);

  return (
    <NavigationContainer>
      {hideSplashScreen ? null : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Footer" component={Footer}/>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Bag" component={Bag} />
          <Stack.Screen name="PayAndOrder" component={PayAndOrder} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
