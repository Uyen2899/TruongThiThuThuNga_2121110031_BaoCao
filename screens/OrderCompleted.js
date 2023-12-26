import * as React from "react";
import { Image, StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const OrderCompleted = ({ navigation }) => {
  const handleProceedToContinuteShopping = () => {
    navigation.navigate('Footer');
  };
  return (
    <View style={styles.orderCompleted}>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/screens/checkout/arrowleft.png")}
      />
      <TouchableOpacity
          style={styles.arrowLeftIcon}
          onPress={() => {
            navigation.navigate("Footer");
          }}
        >
        </TouchableOpacity>
      <View style={[styles.orderCompletedChild, styles.orderLayout]} />
      <View style={[styles.orderCompletedItem, styles.orderLayout]} />
     
      <TouchableOpacity
        style={styles.proceedToCheckoutButton}
        onPress={handleProceedToContinuteShopping}
      >
        <Text style={[styles.continueShopping, styles.continueShoppingTypo]}>
        Tiếp tục mua sắm
      </Text>
      </TouchableOpacity>
      <Text style={[styles.viewOrderDetails, styles.continueShoppingTypo]}>
        Chi tiết đơn hàng
      </Text>
      <Image
        style={styles.orderCompletedInner}
        resizeMode="cover"
        source={require("../assets/screens/checkout/group2.png")}
      />
      <Text style={styles.paymentDoneSuccessfully}>
        Thanh toán thành công Đơn hàng đã được đặt thành công.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderLayout: {
    height: 50,
    width: 321,
    borderRadius: Border.br_mini,
    left: 43,
    position: "absolute",
  },
  continueShoppingTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 45,
    width: 24,
    height: 24,
    left: 37,
    position: "absolute",
    overflow: "hidden",
  },
  orderCompletedChild: {
    top: 738,
    backgroundColor: Color.colorLightsalmon,
  },
  orderCompletedItem: {
    top: 666,
    borderStyle: "solid",
    borderColor: Color.colorLightsalmon,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    width: 321,
    borderRadius: Border.br_mini,
  },
  continueShopping: {
    top: 753,
    left: 135,
    color: Color.colorWhite,
  },
  viewOrderDetails: {
    top: 681,
    left: 140,
    color: Color.colorLightsalmon,
  },
  orderCompletedInner: {
    height: "16.87%",
    width: "36.53%",
    top: "30%",
    right: "31.73%",
    bottom: "47.78%",
    left: "31.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  paymentDoneSuccessfully: {
    top: 444,
    left: 74,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    width: 248,
    height: 74,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  orderCompleted: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default OrderCompleted;
