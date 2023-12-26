import React, { useState, useEffect } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GET_ALL, GET_IMG, POST_ADD } from "../api/apiService";
import { FontFamily } from "../GlobalStyles";
import { Alert } from 'react-native';

function Details({ route }) {
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
    return () => clearTimeout(startAnimationTimeout)
  }, []);

  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1); // Số lượng mặc định là 1
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { item } = route.params;
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const selectSize = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };
  const selectColor = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const [totalPrice, setTotalPrice] = useState((quantity * item.price).toFixed(2));

  const handleAddToCart = () => {
    if (selectedSize === null || selectedColor === null) {
      Alert.alert('Thông báo', 'Vui lòng chọn size và màu trước khi mua sản phẩm.');
    } else {
      const product = {
        id: item.id,
        itemProduct: {
          name: item.title,
          price: item.price,
          photo: item.photo,
          category: item.category_id,
        },
        price: item.price,
        quantity: quantity,
        size: selectedSize,
        title: item.title,
        photo: item.photo,
        totalPrice: totalPrice,
      };
  
      POST_ADD("orderproducts", product)
        .then((response) => {
          if (response && response.data) {
            // Successfully added to cart
            Alert.alert('Thông báo', 'Sản phẩm của bạn đã được thêm vào giỏ hàng.');
            // You can navigate to the cart or perform any other action here
          } else {
            Alert.alert('Thông báo', 'Không thể thêm sản phẩm vào giỏ hàng.');
          }
        })
        .catch((error) => {
          console.error("Error adding product to cart:", error);
          alert("Failed to add product to cart.");
        });
    }
    // Only navigate if both size and color are selected
    if (selectedSize !== null && selectedColor !== null) {
      navigation.navigate("Bag", { totalPrice: totalPrice });
    }
  };
  
  return (
    <Animated.View style={styles.ctt}>
      <View style={styles.ct}>
        <View style={styles.khungsp}>
          <Image style={styles.anh} source={{ uri: GET_IMG("products", item.photo) }} />
        </View>
        <View style={styles.kheart}>
          <Image
            style={[styles.heart]}
            source={require("../assets/screens/details/heart.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.navigate("Footer");
          }}
        >
          <Image
            style={[styles.heart]}
            source={require("../assets/screens/details/arrowleft.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kchu}>
        <Text style={styles.txt}>{item.title}</Text>
        <Text style={styles.gia}>{item.price}</Text>
      </View>
      <Text style={styles.si}></Text>
      <View
        style={{
          flexDirection: "row",
          marginRight: 100,
          left: 35,
          paddingBottom: 8,
          paddingTop: 20,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ marginRight: 150 }}>Màu sắc</Text>
        <Text style={{ left: -5 }}>Kích cỡ</Text>
      </View>

      <View style={styles.chon}>
        <View style={styles.color}>
          <View style={[styles.m1, selectedColor === 'blue' && styles.selectedColor]} onTouchEnd={() => selectColor('blue')} />
          <View style={[styles.m2, selectedColor === 'black' && styles.selectedColor]} onTouchEnd={() => selectColor('black')} />
          <View style={[styles.m3, selectedColor === 'pink' && styles.selectedColor]} onTouchEnd={() => selectColor('pink')} />
        </View>
        <View style={styles.color1}>
          <TouchableOpacity
            style={[styles.s, selectedSize === 'S' && styles.selectedSize]}
            onPress={() => selectSize('S')}
          >
            <Text style={[styles.sizeText, selectedSize === 'S' && styles.selectedText]}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.s, selectedSize === 'M' && styles.selectedSize]}
            onPress={() => selectSize('M')}
          >
            <Text style={[styles.sizeText, selectedSize === 'M' && styles.selectedText]}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.s, selectedSize === 'L' && styles.selectedSize]}
            onPress={() => selectSize('L')}
          >
            <Text style={[styles.sizeText, selectedSize === 'L' && styles.selectedText]}>L</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.khft}>
        <View style={styles.btn1}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <View style={styles.ss}>
              <Text>-</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginRight: 20 }}>
            <Text>{quantity}</Text>
          </View>

          <TouchableOpacity onPress={increaseQuantity}>
            <View style={styles.ss}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  ct: {
    height: 480,
    //borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  ctt: {
    backgroundColor: "white",
    marginTop: 50,
    height: 922,
  },
  khungsp: {
    height: 480,
    width: 385, // Điều chỉnh kích thước của mỗi sản phẩm
    //borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "gray",
    top: 50,
  },
  anh: {
    width: 385, // Điều chỉnh kích thước ảnh
    height: 522,
  },
  kheart: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -460,
    left: 160,
  },
  heart: {
    width: 30,
    height: 30,
    top: 20,
  },
  back: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -510,
    left: -150,
  },
  kchu: {
    backgroundColor: "#fff",
    flexDirection: "row",
    top: 10,
    left: 35,
  },
  txt: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandMedium,
  },
  gia: {
    fontSize: 24,
    fontWeight: "700",
    left: 50,
    fontFamily: FontFamily.quicksandMedium,
  },
  si: {
    fontSize: 12,
    fontWeight: "500",
    paddingTop: 10,
    left: 35,
  },
  chon: {
    flexDirection: "row",
    backgroundColor: "#fff",
    left: 30,
  },
  color: {
    flexDirection: "row",
  },
  m1: {
    width: 30,
    height: 30,
    backgroundColor: "blue",
    marginRight: 10,
    borderRadius: 15,
  },
  m2: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    marginRight: 10,
    borderRadius: 15,
  },
  m3: {
    width: 30,
    height: 30,
    backgroundColor: "pink",
    marginRight: 10,
    borderRadius: 15,
  },
  color1: {
    flexDirection: "row",
    left: 75,
  },
  s: {
    width: 30,
    height: 30,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
  },
  ss: {
    width: 30,
    height: 30,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 20,
    textAlign: "center",
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FFF", // Đặt màu của viền
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    backgroundColor: "#FF937B",
    left: 30,
  },
  btn1: {
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
  },
  button: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  khft: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#fff",
    top: 680,
    left: 35,
  },
  selectedSize: {
    backgroundColor: 'black',
  },
  selectedColor: {
    backgroundColor: 'white',
  },
  selectedText: {
    color: 'white',
  },
});
export default Details;
