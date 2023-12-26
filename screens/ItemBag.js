import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { FontFamily } from "../GlobalStyles";

const ItemBag = ({ imageSource, textContent, priceContent }) => {
    return (
        <View>
            <Image
                source={{
                    uri: imageSource,
                }}
                style={{
                    width: 150,
                    height: 210,
                    borderRadius: 15,
                }}
                //resizeMode="contain"
            />
            <View style={styles.kheart}>
                <Image
                    source={require('../assets/screens/home/img/heart.png')}
                />
            </View>
            <Text style={styles.text}>{textContent}</Text>
            <Text style={styles.text1}>{priceContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ItemStyle: {
        height: 200,
        width: 170,
        backgroundColor: "gray",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    text: {
        fontFamily: FontFamily.quicksandMedium,
        fontSize: 15,
        textAlign: "center",
        top: -25,
        left:-10,
    },
    text1: {
        fontFamily: FontFamily.quicksandMedium,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 0,
        top: -25,
        left:-10,
    },
    kheart: {
        width: 35,
        height: 35,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        top: -485,
        left: 100,
      },
});

export default ItemBag;
