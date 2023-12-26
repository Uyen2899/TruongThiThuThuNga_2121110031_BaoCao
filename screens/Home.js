import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import HeaderScreens from "./HeaderScreens";
import { useState, useEffect } from "react";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { FlatList } from "react-native";
import { GET_ALL, GET_IMG } from "../api/apiService";
import ItemHome from "./ItemHome";

const Home = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    const startAnimationTimeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 500);
    return () => clearTimeout(startAnimationTimeout);
  }, []);

  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        if (response && response.data && Array.isArray(response.data.content)) {
          setCoffeeData(response.data.content);
        } else {
          console.error(
            "Data received from the API is not in a supported format."
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Animated.View
      style={[{ backgroundColor: "white" }, { opacity: fadeAnim }]}
    >
      <View style={{ backgroundColor: "white" }}>
        <HeaderScreens navigation={navigation}></HeaderScreens>
        <ScrollView style={{ top: 100 }}>
          <View style={styles.home}>
            <View>
              <Text
                style={styles.findTheBest}
              >{`Find the best fit for all your needs!`}</Text>
            </View>
            <View style={styles.homeItem} />
            <Image
              style={styles.searchIcon}
              source={require("../assets/screens/home/img/search.png")}
            />
            <Text style={styles.search}>Tìm kiếm</Text>
            <FlatList
              data={coffeeData}
              numColumns={2}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.columnContainer}
                  onPress={() => {
                    navigation.navigate("Details", { item });
                  }}
                >
                  <ItemHome
                    key={index}
                    imageSource={GET_IMG("products", item.photo)}
                    textContent={item.title}
                    priceContent={item.price}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flex: 0.43,
  },
  flatListContainer: {
    width: "100%",
    height: "100%",
    marginTop: 270,
    marginLeft: 43,
    backgroundColor: "#fff",
  },
  searchIcon: {
    position: "absolute",
    left: 60,
    top: 215,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  search: {
    position: "absolute",
    top: 218,
    left: 100,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    opacity: 0.2,
  },
  homeItem: {
    top: 202,
    backgroundColor: "#e8e8e8",
    width: 326,
    height: 50,
    borderRadius: 15,
    left: 43,
    position: "absolute",
  },
  findTheBest: {
    width: 220,
    top: 119,
    fontSize: 24,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: 43,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    height: 1700,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    top: -100,
  },
});

export default Home;
