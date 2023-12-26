import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { GET_ALL, GET_IMG, DELETE_ID, PUT_EDIT } from "../api/apiService";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';


const Bag = ({ navigation }) => {
  const handleProceedToCheckout = () => {
    if (selectedItems.length > 0) {
      navigation.navigate('PayAndOrder');
    } else {
      Alert.alert('Thông báo', 'Vui lòng chọn ít nhất 1 sản phẩm.');
    }
  };

  const [orderProductsData, setOrderProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [itemCheckedState, setItemCheckedState] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const toggleCheckbox = (itemId) => {
    const item = orderProductsData.find((item) => item.id === itemId);
    if (!item) {
      return;
    }

    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
      setItemCheckedState({
        ...itemCheckedState,
        [itemId]: false,
      });
      setTotalPrice((prevTotalPrice) => prevTotalPrice - item.totalPrice * item.quantity);
    } else {
      setSelectedItems([...selectedItems, itemId]);
      setItemCheckedState({
        ...itemCheckedState,
        [itemId]: true,
      });
      setTotalPrice((prevTotalPrice) => prevTotalPrice + item.totalPrice * item.quantity);
    }
  };


  const updateQuantity = (itemId, increase) => {
    const item = orderProductsData.find((item) => item.id === itemId);
    if (item) {
      // Calculate the new quantity
      const newQuantity = increase ? item.quantity + 1 : Math.max(item.quantity - 1, 1);

      // Update the quantity for the selected item locally
      const updatedData = orderProductsData.map((product) => {
        if (product.id === itemId) {
          return {
            ...product,
            quantity: newQuantity,
            title: item.title,
            price: item.price,
            photo: item.photo,
            totalPrice: item.totalPrice,
            size: item.size,
          };
        }
        return product;
      });

      setOrderProductsData(updatedData);

      // Update the quantity on the server using PUT_EDIT
      PUT_EDIT(`orderproducts/${itemId}`, {
        quantity: newQuantity,
        // Include other properties if they exist in the item object
        title: item.title,
        price: item.price,
        photo: item.photo,
        totalPrice: item.totalPrice,
        size: item.size,
      })
        .then((response) => {
          // Handle the response if needed
        })
        .catch((error) => {
          console.error("Error while updating quantity on the server: ", error);
        });

      // Update the total price based on the new quantity only if the item is selected
      if (selectedItems.includes(itemId)) {
        setTotalPrice((prevTotalPrice) => {
          const priceChange = (newQuantity - item.quantity) * item.totalPrice;
          return prevTotalPrice + priceChange;
        });
      }
    }
  };

  const fetchData = useCallback(() => {
    // Sử dụng hàm GET_ALL để tải dữ liệu từ API của bạn
    GET_ALL("orderproducts")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setOrderProductsData(responseData.content); // Cập nhật trạng thái với mảng "content"
        } else {
          console.error(
            "Dữ liệu nhận được từ API không có định dạng được hỗ trợ."
          );
        }
        setIsLoading(false);
        setRefreshing(false); // Đặt refreshing thành false khi dữ liệu được tải
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu: ", error);
        setIsLoading(false);
        setRefreshing(false); // Đặt refreshing thành false trong trường hợp có lỗi
      });
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(); // Kích hoạt tải dữ liệu khi làm mới
  };

  // Define a function to update the total price
  const updateTotalPrice = (itemId, isAdd) => {
    const item = orderProductsData.find((item) => item.id === itemId);
    if (item) {
      const itemPrice = item.totalPrice;
      const priceChange = isAdd ? itemPrice : -itemPrice;
      setTotalPrice((prevTotalPrice) => prevTotalPrice + priceChange);
    }
  };
  const handleDeleteItem = (itemId, rowMap) => {
    const item = orderProductsData.find((item) => item.id === itemId);
    if (!item) {
      console.error("Item not found");
      return;
    }
  
    const row = rowMap[itemId];
    if (row) {
      row.closeRow(); // Đóng SwipeListView row sau khi xóa
    }
  
    DELETE_ID("orderproducts/" + itemId)
      .then((response) => {
        if (response.status === 200) {
          const updatedData = orderProductsData.filter(
            (item) => item.id !== itemId
          );
          setOrderProductsData(updatedData);
  
          // Update the total price by subtracting the deleted item's price if it was selected
          if (selectedItems.includes(itemId)) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice - item.totalPrice * item.quantity);
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
          }
        } else {
          console.error("Failed to delete item on the server.");
        }
      })
      .catch((error) => {
        console.error("Error while deleting item: ", error);
      });
  };
  

  const [isTrashVisible, setIsTrashVisible] = useState(false);

  const handleDeleteSelectedItems = () => {
    Promise.all(
      selectedItems.map((itemId) => DELETE_ID("orderproducts/" + itemId))
    )
      .then((responses) => {
        if (responses.every((response) => response.status === 200)) {
          const updatedData = orderProductsData.filter(
            (item) => !selectedItems.includes(item.id)
          );
          setOrderProductsData(updatedData);

          selectedItems.forEach((itemId) => {
            // Update the total price by subtracting the deleted item's price for each selected item
            const deletedItem = orderProductsData.find((item) => item.id === itemId);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - deletedItem.totalPrice * deletedItem.quantity);
          });

          setSelectedItems([]);

          if (updatedData.length === 0) {
            setTotalPrice(0);
          }
        } else {
          console.error("Failed to delete selected items on the server.");
        }
      })
      .catch((error) => {
        console.error("Error while deleting selected items: ", error);
      });
  };

  const renderRightActions = (progress, dragX, itemId) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#f37e33",
            width: 50,
            borderRadius: 15,
            justifyContent: "center",
            marginLeft: 10,
            height: 119,
            alignItems: "center",
          }}
          onPress={() => handleDeleteItem(itemId)}
        >
          <Image
            style={{}}
            source={require("../assets/screens/bag/trash2.png")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.bag}>
      <View style={styles.header}>
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../assets/screens/bag/arrowleft.png")}
        />
        <TouchableOpacity
          style={styles.arrowLeftIcon}
          onPress={() => {
            navigation.navigate("Footer");
          }}
        >
          <Image
            style={[styles.arrowLeftIcon]}
            source={require("../assets/screens/details/arrowleft.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.shoppingBag, styles.textTypo6]}>Giỏ hàng</Text>
        <View style={styles.shoppingBagParent}>
          <Image
            style={[styles.shoppingBagIcon, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/screens/bag/shoppingbag.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/screens/bag/ellipse2.png")}
          />
          <Text style={styles.text3}>2</Text>

        </View>
      </View>
      <ScrollView style={{ backgroundColor: "white", top: 100, height: 400, marginBottom: 100 }}>
        <SwipeListView
          data={orderProductsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item1}>
              <TouchableOpacity
                style={{
                  width: 17,
                  height: 17,
                  borderRadius: 5,
                  borderWidth: 1.5,
                  marginTop: 30,
                  borderColor: itemCheckedState[item.id]
                    ? "#FF937B"
                    : "#FF937B",
                  backgroundColor: itemCheckedState[item.id]
                    ? "#FF937B"
                    : "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => toggleCheckbox(item.id)}
              >
                {itemCheckedState[item.id] && (
                  <Icon name="check" size={14} color="white" />
                )}
              </TouchableOpacity>
              <Image
                style={styles.bagChild3Layout}
                resizeMode="cover"
                source={{
                  uri: GET_IMG("orderproducts", item.photo),
                }}
              />
              <View style={styles.info1}>
                <Text style={[styles.box, styles.cottonQueenT]}>{item.title}</Text>
                <Text style={[styles.box, styles.text10]}>{item.price} VND</Text>
                <View style={styles.row}>
                  <View style={styles.quantityButtons}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.id, false)}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={[styles.box2, styles.textTypo2]}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.id, true)}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.info2}>
                <Text style={styles.s}>{item.size}</Text>
                <Image
                  style={[styles.bagInnerPosition]}
                  resizeMode="cover"
                  source={require("../assets/screens/bag/ellipse17.png")}
                />
                {/* <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
              <Image
                style={styles.trash2IconPosition}
                resizeMode="cover"
                source={require("../assets/screens/bag/trash2.png")} // Replace with the correct image source
              />
            </TouchableOpacity> */}
              </View>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => handleDeleteItem(data.item.id, rowMap)}
              >
                {isTrashVisible && (
                  <Image
                    style={styles.trash2IconPosition}
                    resizeMode="cover"
                    source={require("../assets/screens/bag/trash2.png")}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-75}
          onSwipeValueChange={(swipeData) => {
            // Kiểm tra xem swipeData có thuộc tính 'value' không
            if (swipeData && swipeData.value !== undefined) {
              const shouldShowTrash = swipeData.value < 0;
              setIsTrashVisible(shouldShowTrash);
            }
          }}
        />

      </ScrollView>
      <View style={styles.item2}>
        <View style={styles.lineViewLayout} />
        <View style={[styles.bagChild4, styles.bagChild4Layout]} />
        <View style={styles.bagChild5} />
        <Text style={styles.apply}>Áp dụng</Text>
        <Text style={styles.promoCode}>Mã giảm giá</Text>
        <View style={[styles.bagChild6, styles.lineViewLayout]} />
      </View>
      <View style={styles.item3}>
        <View style={styles.content}>
          <Text style={styles.bagTotal}>Tổng</Text>
          <Text style={styles.bagTotal}>Vận chuyển</Text>
          <Text style={[styles.bagTotal, { top: 10 }]}>Tổng tiền</Text>
        </View>
        <View style={styles.price}>
          <Text style={[styles.text1, styles.textTypo7]}>{totalPrice.toLocaleString()}</Text>
          <Text style={[styles.text1, styles.textTypo7]}>0</Text>
          <Text style={[styles.text, styles.textTypo7]}>{totalPrice.toLocaleString()}</Text>
        </View>
        <View style={styles.content3}>
          <Text style={styles.text2}>VND</Text>
          <Text style={styles.text2}>VND</Text>
          <Text style={styles.text7}>VND</Text>
        </View>
      </View>
      <View>
        <View style={[styles.rectangleView, styles.bagChild4Layout]} />
        <TouchableOpacity
          style={styles.proceedToCheckoutButton}
          onPress={handleProceedToCheckout}
        >
          <Text style={[styles.proceedToCheckout, styles.textTypo]}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    //backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#FFF',
    right: 0,
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  quantityButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e8e8e8"
  },
  quantityButtonText: {
    fontSize: 16,
    color: 'black',
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: '600',
    top: -2,
  },
  header: {
    flex: 1,
    top: 15,
    zIndex: 100,
  },
  item1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    left: 25,
  },
  item4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  box: {
    width: 200,
    height: 30,
  },
  info1: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: 15,
    flex: 0.8,
  },
  info2: {
    flexDirection: 'column',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box2: {
    width: 30,
  },
  item2: {
    height: 210,
  },
  item3: {
    marginHorizontal: 35,
    top: -80,
    height: 100,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  textTypo7: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  content3: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text2: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: 25,
  },
  text7: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: 25,
    marginTop: 20,
    color: Color.colorLightsalmon,
  },
  textTypo6: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  bagLayout: {
    height: 25,
    width: 25,
    left: 2,
    position: "absolute",
  },
  bagInnerPosition: {
    height: 35,
    width: 35,
    top: 2,
  },
  bagChildPosition: {
    height: 25,
    width: 25,
    left: 62,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 10,
  },
  bagChild4Layout: {
    height: 50,
    width: 321,
    borderRadius: Border.br_mini,
  },
  bagChild3Layout: {
    height: 85,
    width: 76,
    borderRadius: Border.br_mini,
    marginLeft: 20,
  },
  trash2IconPosition: {
    height: 30,
    width: 30,
    overflow: "visible",
    top: -5,
    left:-9,
    zIndex: 100,
  },
  lineViewLayout: {
    height: 0,
    borderTopWidth: 0.2,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    width: 321,
    left: 43,
  },
  arrowLeftIcon: {
    top: 35,
    height: 24,
    width: 24,
    left: 37,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: 25,
    color: Color.colorLightsalmon,
    marginTop: 15,
  },
  text1: {
    fontSize: 25,
    marginBottom: 3,
  },
  shoppingBag: {
    top: 34,
    left: 155,
  },
  shoppingBagIcon: {
    height: "75%",
    width: "75%",
    top: "25%",
    right: "25%",
    bottom: "0%",
    left: "0%",
  },
  groupChild: {
    height: "62.5%",
    width: "62.5%",
    top: "0%",
    right: "0%",
    bottom: "37.5%",
    left: "37.5%",
  },
  text3: {
    top: "12.5%",
    left: "59.38%",
    fontSize: 10,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  shoppingBagParent: {
    height: 30,
    width: 30,
    top: 30,
    left: 340,
    position: "absolute",
  },
  bagTotal: {
    fontFamily: FontFamily.quicksandRegular,
    fontWeight: "500",
    color: "black",
    fontSize: 20,
  },
  bagChild: {
    top: 284,
  },
  ellipseIcon: {
    top: 111,
  },
  bagChild1: {
    top: 284,
  },
  text4: {
    left: 145,
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    top: 290,
  },
  text5: {
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    zIndex: 100,
    textAlign: 'center',
    fontWeight: "500",
  },
  text6: {
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    zIndex: 100,
    textAlign: 'center',
    fontWeight: "500",
  },
  m: {
    top: 235,
    left: 337,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  s: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandMedium,
    color: Color.colorWhite,
    fontWeight: "500",
    zIndex: 100,
    left: 13,
    top: 28,
  },
  text8: {
    top: 290,
  },
  rectangleView: {
    backgroundColor: Color.colorLightsalmon,
    marginHorizontal: 43,
    top: -20,
  },
  proceedToCheckout: {
    top: -58,
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: 125,
    fontSize: 18,
  },
  rectangleIcon: {
    top: 229,
  },
  greyTShirt: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 229,
    left: 134,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  cottonQueenT: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  text10: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  text11: {
    top: 136,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    left: 134,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  bagChild4: {
    backgroundColor: "#e8e8e8",
    margin: 35,
    left: 12,
  },
  bagChild5: {
    left: 280,
    borderRadius: 11,
    backgroundColor: "#42d1f0",
    width: 85,
    height: 40,
    top: -80,
  },
  apply: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    left: 298,
    top: -110,
    zIndex: 100,
  },
  promoCode: {
    width: 86,
    opacity: 0.2,
    top: -126,
    left: 60,
  },

  bagChild6: {
    top: -80,
  },
  bag: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 700,
    overflow: "hidden",
  },
});

export default Bag;
