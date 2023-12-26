import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight, TextInput } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { GET_ALL, GET_IMG } from "../api/apiService";
import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

const apiUrl = 'http://172.20.10.5:8080/api/user';

const LoginScreen = ({ navigation }) => {
  const handleSignUpPress = () => {
    navigation.navigate('Register')
  };
  const handleFacebookLogin = () => {
    // Xử lý sự kiện khi nút Login with Facebook được chạm vào ở đây
    console.log('Login with Facebook được chạm vào');
  };

  const handleGoogleLogin = () => {
    // Xử lý sự kiện khi nút Login with Google được chạm vào ở đây
    console.log('Login with Google được chạm vào');
  };

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(apiUrl); // Gửi yêu cầu GET để lấy thông tin từ API

      // Kiểm tra xem thông tin đăng nhập có tồn tại trong dữ liệu API hay không
      const user = response.data.content.find((user) => user.tk === emailInput && user.mk === passwordInput);

      if (user) {
        // Đăng nhập thành công, bạn có thể lưu token vào Redux hoặc AsyncStorage
        // Sau đó chuyển đến màn hình chính
        Alert.alert('Thông báo', 'Đăng nhập thành công.');
        navigation.navigate('Footer');
      } else {
        // Đăng nhập thất bại, hiển thị thông báo lỗi
        Alert.alert('Thông báo', 'Tên người dùng hoặc mật khẩu không đúng.');
      }
    } catch (error) {
      // Xử lý lỗi kết nối đến API
      console.error(error);
      Alert.alert('Thông báo', 'Đã xảy ra lỗi khi kết nối đến máy chủ.');
    }
  };

  return (
    <View style={styles.iphone13ProMax1Parent}>
      <Text style={styles.helloWelcomeBack}>Chào mừng trở lại!</Text>
      <Image
        style={styles.emojiIcon}
        resizeMode="cover"
        source={require("../assets/screens/login/img/emoji.png")}
      />
      <Text style={styles.helloAgainYouve}>
        Xin chào! Đừng bỏ lỡ!
      </Text>
      <Text style={[styles.emailAddress1, styles.google1Typo]}>
        Địa chỉ Email
      </Text>
      <Text style={[styles.password1, styles.google1Typo]}>Password</Text>
      <View style={[styles.frameChild, styles.frameLayout]}>
        <TextInput
          style={styles.textInput}
          placeholder="abc@gmail.com"
          value={emailInput}
          onChangeText={(text) => setEmailInput(text)}
        />
      </View>
      <View style={[styles.frameChild, styles.frameLayout1]}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập mật khẩu của bạn"
          value={passwordInput}
          onChangeText={(text) => setPasswordInput(text)}
          secureTextEntry={true}  // Add this line
        />

      </View>
      <Image
        style={[styles.eyeIcon, styles.eyeIconPosition]}
        resizeMode="cover"
        source={require("../assets/screens/login/img/eye.png")}
      />
      <Text style={[styles.rememberMe, styles.rememberMePosition]}>
        Lưu đăng nhập
      </Text>
      <Text style={[styles.forgotPassword, styles.rememberMePosition]}>
        Quên mật khẩu?
      </Text>
      <Image
        style={styles.checkedCheckboxIcon}
        resizeMode="cover"
        source={require("../assets/screens/login/img/checked-checkbox.png")}
      />
      <View style={styles.frameInner} />
      <TouchableHighlight
        style={styles.loginButton}
        onPress={handleLogin}
        underlayColor="lightgray"
      >
        <Text style={[styles.loginText, styles.loginTypo]}>Đăng nhập</Text>
      </TouchableHighlight>

      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.frameChild1, styles.lineViewPosition]} />
      <Text style={[styles.orLoginWith1, styles.loginTypo1]}>
        Hoặc Đăng nhập với
      </Text>
      <View style={[styles.frameChild2, styles.frameChildLayout]} />
      <View style={[styles.frameChild3, styles.frameChildLayout]} />
      <TouchableHighlight
        style={styles.facebookButton}
        onPress={handleFacebookLogin}
        underlayColor="lightgray"
      >
        <View style={styles.iconContainer}>
          <Image
            style={styles.facebookIcon}
            resizeMode="cover"
            source={require("../assets/screens/login/img/facebook.png")}
          />
          <Text style={styles.facebookButtonText}>Facebook</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.googleButton}
        onPress={handleGoogleLogin}
        underlayColor="lightgray"
      >
        <View style={styles.iconContainer}>
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/screens/login/img/google@3x.png")}
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </View>
      </TouchableHighlight>
      <Text style={[styles.dontHaveAn, styles.signUp1Position]}>
        Bạn chưa có tài khoản?
      </Text>
      <Text
        style={[styles.signUp1, styles.signUp1Position]}
        onPress={handleSignUpPress} // Add this onPress handler
      >
        Đăng ký
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  google1Typo: {
    width: 213,
    height: 26,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 33,
    width: 347,
    left: 25,
    top: 211,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  frameLayout1: {
    height: 33,
    width: 347,
    left: 25,
    top: 288,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rodgenceyahoocomTypo: {
    left: 38,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
  },
  eyeIconPosition: {
    top: 293,
    left: 320,
    position: "absolute",
  },
  rememberMePosition: {
    top: 335,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "600",
  },
  lineViewPosition: {
    borderTopWidth: 1,
    borderColor: Color.colorSilver_100,
    top: 500,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  loginTypo1: {
    fontSize: 15,
    textAlign: "left",
    position: "absolute",
  },
  signUp1Position: {
    top: 700,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  helloWelcomeBack: {
    top: 87,
    width: 293,
    height: 33,
    left: 25,
    color: Color.colorBlack,
    fontSize: 24,
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    position: "absolute",
  },
  emojiIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 89,
    left: 290,
  },
  helloAgainYouve: {
    top: 122,
    color: "#a8a2a2",
    width: 222,
    height: 24,
    left: 31,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    position: "absolute",
  },
  emailAddress1: {
    top: 182,
    left: 25,
  },
  password1: {
    top: 260,
    left: 25,
  },
  frameChild: {
    top: 357,
  },
  rodgenceyahoocom: {
    top: 215,
    color: "gray",
    position: "absolute",
  },
  enterYourPassword1: {
    color: "#a89f9f",
    left: 38,
    top: 293,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
  },
  eyeIcon: {
    left: 480,
    width: 66,
    height: 21,
  },
  rememberMe: {
    left: 50,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
  },
  forgotPassword: {
    left: 250,
    color: "blue",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
  },
  checkedCheckboxIcon: {
    width: 29,
    height: 20,
    left: 25,
    position: 'absolute',
    top: 335,
  },
  frameInner: {
    top: 399,
    height: 39,
    width: 347,
    left: 35,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkcyan,
    position: "absolute",
  },
  lineView: {
    width: 80,
    left: 285,
  },
  frameChild1: {
    left: 25,
    width: 80,
  },
  orLoginWith1: {
    top: 488,
    left: 125,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
  },
  dontHaveAn: {
    left: 80,
    color: "#9d9393",
    width: 190,
    fontFamily: FontFamily.quicksandRegular,
  },
  signUp1: {
    left: 255,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "600",
    color: Color.colorDarkcyan,
  },

  loginButton: {
    backgroundColor: '#FF937B',
    padding: 7,
    borderRadius: 5,
    position: 'absolute',
    top: 399,
    left: 25,
    width: 347,
    height: 39,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    top:3,
  },
  iphone13ProMax1Parent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  facebookButton: {
    backgroundColor: 'white', // Màu của Facebook
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF937B',
    position: 'absolute',
    top: 550, // Điều chỉnh vị trí theo cần thiết
    left: 25,
    width: 150,
    height: 39,
  },
  googleButton: {
    backgroundColor: 'white', // Màu của Google
    padding: 8,
    borderRadius: 5,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#FF937B',
    top: 550, // Điều chỉnh vị trí theo cần thiết
    left: 215,
    width: 150,
    height: 39,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  facebookButtonText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  googleButtonText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  textInput: {
    height: 30,
    borderColor: 'gray',
    paddingLeft: 10, // Thêm padding để giữ cho dòng mặc định hiển thị bên trong TextInput
  },
});

export default LoginScreen;