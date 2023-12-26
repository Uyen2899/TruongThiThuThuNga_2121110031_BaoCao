import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const HeaderScreens = ({ navigation }) => {
    const handleShoppingBagPress = () => {
        navigation.navigate('Bag')
    };
    return (
        <View style={styles.container}>
            <Text style={styles.hiSelina}>Chào, Ngọc!</Text>
            <Image
                style={styles.homeChild}
                resizeMode="cover"
                source={require("../assets/screens/home/img/Ellipse1.png")}
            />
            <TouchableHighlight
                style={styles.shoppingBagParent}
                onPress={handleShoppingBagPress} // Add this onPress handler
                underlayColor="transparent" // You can customize the underlay color
            >
                <View>
                    <Image
                        style={[styles.shoppingBagIcon, styles.iconLayout1]}
                        source={require("../assets/screens/home/img/shopping-bag.png")}
                    />
                    <View style={[styles.groupChild, styles.groupChildBg]} />
                    <Text style={styles.text}>2</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        top: 15,
    },
    groupChildBg: {
        backgroundColor: Color.colorLightsalmon,
        position: "absolute",
        borderRadius: 20,
    },

    hiSelina: {
        top: 43,
        left: 100, // Cộng thêm 10
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.quicksandBold,
        fontWeight: "500",
        fontSize: FontSize.size_sm,
        position: "absolute",
    },

    homeChild: {
        width: 42,
        height: 42,
        top: 29,
        left: 43, // Cộng thêm 10
        position: "absolute",
    },
    shoppingBagIcon: {
        top: 8,
        left: 20, // Cộng thêm 10
    },
    groupChild: {
        left: 30, // Cộng thêm 10
        borderStyle: "solid",
        borderColor: Color.colorWhite,
        borderWidth: 2,
        width: 20,
        height: 20,
        top: 0,
    },
    text: {
        top: 4,
        left: 37, // Cộng thêm 10
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
});
export default HeaderScreens;