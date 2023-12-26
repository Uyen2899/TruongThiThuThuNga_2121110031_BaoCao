import React from "react";
import {View,Text,SafeAreaView,TouchableOpacity,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles"; 

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FF937B",
          borderBottomWidth: 2,
          borderColor: "#f3f5f7",
        }}
      >
        <SafeAreaView style={{flex:1, flexDirection: "row",alignItems:"center"}}>
          <TouchableOpacity style={{ marginLeft: 10,flex:1 }}>
            <Image
              source={require("../assets/screens/home/img/meo.png")}
              style={{ width: 80, height: 80,left:20,top:5,borderWidth:1,borderColor:"white",borderRadius:50 }}
            />
          </TouchableOpacity>
          <Text
            style={{flex:3, fontSize: 20, marginHorizontal: 30,fontFamily:FontFamily.quicksandBold}}
          >
            Nguyễn Thị Bích Ngọc
          </Text>
        </SafeAreaView>
      </View>
      <View style={{ flex: 3, backgroundColor: "#ffffff" }}>
        <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15, // Change the padding size to 15
              borderRightWidth: 2,
              borderColor: "#333",
            }}
          >
            <Icon name="ticket" size={30} color="#333" />
            <Text style={{ marginLeft: 20, fontSize: 20,fontFamily:FontFamily.quicksandMedium }}>Mã giảm giá</Text>
            <Icon
              name="chevron-right" // Biểu tượng ">"
              size={20} // Kích thước của biểu tượng
              color="#bfbec4" // Màu sắc của biểu tượng
              style={{ marginLeft: "auto" }} // Đặt biểu tượng ở phía bên phải
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15, // Change the padding size to 15
              borderRightWidth: 2,
              borderColor: "#333",
            }}
          >
            <Icon name="credit-card" size={26} color="#333" />
            <Text style={{ marginLeft: 20, fontSize: 20,fontFamily:FontFamily.quicksandMedium }}>
              Phương thức thanh toán
            </Text>
            <Icon
              name="chevron-right" // Biểu tượng ">"
              size={20} // Kích thước của biểu tượng
              color="#bfbec4" // Màu sắc của biểu tượng
              style={{ marginLeft: "auto" }} // Đặt biểu tượng ở phía bên phải
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15, // Change the padding size to 15
              borderRightWidth: 2,
              borderColor: "#333",
            }}
          >
            <Icon name="cog" size={30} color="#333" />
            <Text style={{ marginLeft: 20, fontSize: 20,fontFamily:FontFamily.quicksandMedium }}>Cài đặt</Text>
            <Icon
              name="chevron-right" // Biểu tượng ">"
              size={20} // Kích thước của biểu tượng
              color="#bfbec4" // Màu sắc của biểu tượng
              style={{ marginLeft: "auto" }} // Đặt biểu tượng ở phía bên phải
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15, // Change the padding size to 15
              borderRightWidth: 2,
              borderColor: "#333",
            }}
          >
            <Icon name="language" size={30} color="#333" />
            <Text style={{ marginLeft: 20, fontSize: 20,fontFamily:FontFamily.quicksandMedium }}>Ngôn ngữ</Text>
            <Icon
              name="chevron-right" // Biểu tượng ">"
              size={20} // Kích thước của biểu tượng
              color="#bfbec4" // Màu sắc của biểu tượng
              style={{ marginLeft: "auto" }} // Đặt biểu tượng ở phía bên phải
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15, // Change the padding size to 15
              borderRightWidth: 2,
              borderColor: "#333",
            }}
          >
            <Icon name="question-circle" size={30} color="#333" />
            <Text style={{ marginLeft: 20, fontSize: 20,fontFamily:FontFamily.quicksandMedium }}>Trung tâm trợ giúp</Text>
            <Icon
              name="chevron-right" // Biểu tượng ">"
              size={20} // Kích thước của biểu tượng
              color="#bfbec4" // Màu sắc của biểu tượng
              style={{ marginLeft: "auto" }} // Đặt biểu tượng ở phía bên phải
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15, // Change the padding size to 15
            }}
          >
            <Icon name="info-circle" size={30} color="#333" />
            <Text style={{ marginLeft: 20, fontSize: 20,fontFamily:FontFamily.quicksandMedium }}>Về chúng tôi</Text>
            <Icon
              name="chevron-right" // Biểu tượng ">"
              size={20} // Kích thước của biểu tượng
              color="#bfbec4" // Màu sắc của biểu tượng
              style={{ marginLeft: "auto" }} // Đặt biểu tượng ở phía bên phải
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default ProfileScreen;
