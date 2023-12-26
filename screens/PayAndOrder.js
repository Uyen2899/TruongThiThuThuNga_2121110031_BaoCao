import React, { useState } from "react";
import { useMemo } from "react";
import {
  View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../GlobalStyles";

function PayAndOrder() {
  const navigation = useNavigation();
  const radioButtons = [
    { label: "Tiền mặt", value: "option1" },
    { label: "Thẻ ATM / Visa", value: "option2" },
    { label: "Momo", value: "option3" },
    { label: "Chuyển tiền", value: "option4" },
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
  };

  const radioButtons1 = [
    {
      label:
        "Bích Ngọc,\n 21/3, Tăng Nhơn Phú,\n TP. Thủ Đức,\n Hồ Chí Minh.",
      value: "option1",
    },
    {
      label: "Cẩm Vân,\n44, Đỗ Xuân Hợp,\nPhước Long B,\nHồ Chí Minh.",
      value: "option2",
    },
  ];

  const [selectedValue1, setSelectedValue1] = useState(null);

  const handleRadioButtonPress1 = (value) => {
    setSelectedValue1(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.vo}>
        <View>

          <TouchableOpacity
            style={styles.ic}
            onPress={() => {
              navigation.navigate("Bag");
            }}
          >
            <Image
              style={[styles.ic]}
              source={require("../assets/screens/details/arrowleft.png")}
            />
          </TouchableOpacity>

        </View>
        <View style={styles.ib}>
          <Text style={styles.txt}>Thanh toán</Text>
        </View>
        <View style={styles.ib}>
          <Image
            style={styles.ic}
            source={require("../assets/screens/payment/shoppingbag.png")}
          ></Image>
        </View>
      </View>

      <View style={styles.rdi}>
        <Text style={styles.paymentMethod}>
          Phương thức thanh toán
        </Text>
        {radioButtons.map((radio, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioButton}
            onPress={() => handleRadioButtonPress(radio.value)}
          >
            <View
              style={[
                styles.radioButtonCircle,
                selectedValue === radio.value &&
                styles.radioButtonCircleSelected,
              ]}
            >
              {selectedValue === radio.value && (
                <Text style={styles.radioButtonDot}>.</Text>
              )}
            </View>
            <Text style={styles.radioButtonLabel}>{radio.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.hr}></View>
      <View>
        <Text style={styles.txt1}>Địa chỉ nhận hàng</Text>
        <ScrollView
          horizontal={true} // Đặt thuộc tính horizontal thành true để tạo scroll view chiều ngang
          contentContainerStyle={{ padding: 20 }} // Tùy chỉnh style của nội dung bên trong scroll view
        >
          {radioButtons1.map((radio, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.radioButton1, selectedValue1 === radio.value && styles.radioButtonSelected,
              ]}
              onPress={() => handleRadioButtonPress1(radio.value)}
            >
              <View
                style={[
                  styles.radioButtonCircle1,
                  selectedValue1 === radio.value &&
                  styles.radioButtonCircleSelected1,
                ]}
              />
              <Text style={styles.radioButtonLabel1}>{radio.label}</Text>
            </TouchableOpacity>
          ))}
          {/* Thêm các mục khác theo ý muốn */}
        </ScrollView>
      </View>
      <Text style={styles.txt2}> + Thêm một địa chỉ mới</Text>
      <View style={styles.vo1}>
        <View>
          <Image
            style={styles.ic}
            source={require("../assets/screens/payment/4230551deliveryshippingtimeicon1.png")}
          ></Image>
        </View>
        <View style={styles.ib1}>
          <Text style={styles.txt2}>Dự kiến nhận hàng: 25 T3 2023</Text>
        </View>
      </View>
      <View style={styles.phi}>
        <View style={styles.phic}>
          <Text style={styles.ch}>Tổng tiền thanh toán</Text>
          <Text style={styles.tt}>100.000 VND</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.gg1}
        onPress={() => {
          navigation.navigate("OrderCompleted");
        }}>
        <Text style={{ fontWeight: "700", color: "#FFF", fontSize: 18, }}>
          Tiến hành thanh toán
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#FFF",
    height: 1000,
  },
  paymentMethod: {
    fontFamily: FontFamily.quicksandBold,
    fontSize: 20,
    marginTop: 20,
  },
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  vo1: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 65,
  },
  ib1: {
    marginLeft: 20,
  },

  ic: {
    width: 35,
    height: 35,
  },

  txt: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  txt1: {
    marginTop: 20,
    color: "black",
    fontSize: 20,
    fontFamily: FontFamily.quicksandBold,
  },
  txt2: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  hr: {
    marginTop: 40,
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  gg1: {
    backgroundColor: "#FF937B",
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    borderRadius: 20,
    marginTop: 20,
    height: 50,
  },
  phi: {
    marginTop: 30,
    flexDirection: "column",
  },
  phic: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: -10,
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
  },
  tt: {
    right: 0,
    fontSize: 25,
    fontWeight: "500",
    color: "#FF937B",
    left:25,
  },
  ch: {
    left:-20,
    fontSize: 16,
  },
  rdi: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  radioButtonCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 10,
  },
  radioButtonCircleSelected: {
    // Thay đổi màu chỉ trong ô tròn khi radio button được chọn
    borderColor: "#42D1FO",
    backgroundColor: "black",
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  radioButtonSelected: {
    // Kiểu dáng khi radio button được chọn
    backgroundColor: "#ccc",
  },
  ///===================
  radioButton1: {
    flexDirection: "row",
    width: 230,
    height: 118,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  radioButtonCircle1: {
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 20,
  },
  radioButtonCircleSelected1: {
    // Thay đổi màu chỉ trong ô tròn khi radio button được chọn
    borderColor: "#42D1FO",
    backgroundColor: "black",
  },
  radioButtonLabel1: {
    top: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  radioButtonSelected1: {
    // Kiểu dáng khi radio button được chọn
    backgroundColor: "#42D1FO",
  },
});
export default PayAndOrder;