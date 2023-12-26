import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight, TextInput } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { POST_ADD } from "../api/apiService";
import { Alert } from 'react-native';

const Register = ({ navigation }) => {
    const handleLoginPress = () => {
        navigation.navigate('LoginScreen')
    };

    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleFacebookLogin = () => {
        // Xử lý sự kiện khi nút Login with Facebook được chạm vào ở đây
        console.log('Login with Facebook được chạm vào');
    };

    const handleGoogleLogin = () => {
        // Xử lý sự kiện khi nút Login with Google được chạm vào ở đây
        console.log('Login with Google được chạm vào');
    };
    const handleRegister = () => {
        // Check if any of the required fields is empty
        if (!emailInput || !mobileInput || !passwordInput) {
            Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        const user = {
            tk: emailInput,
            mk: passwordInput,
            tenkh: "null",
            sdt: mobileInput,
            dichi: "null",
        };

        POST_ADD("user", user)
            .then((response) => {
                if (response && response.data) {
                    // Successfully added to cart
                    Alert.alert('Thông báo', 'Tài khoản đã được đăng ký thành công.');

                    // Reset input fields to their initial state
                    setEmailInput('');
                    setMobileInput('');
                    setPasswordInput('');

                    // You can navigate to the cart or perform any other action here
                } else {
                    Alert.alert('Thông báo', 'Không thể đăng ký tài khoản.');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [emailInput, setEmailInput] = useState('');
    const [mobileInput, setMobileInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    return (
        <View style={styles.iphone13ProMax1Parent}>
            <Text style={styles.helloWelcomeBack}>Tạo tài khoản </Text>
            <Text style={styles.helloAgainYouve}>
                Mua những thứ bạn yêu!
            </Text>
            <Text style={[styles.emailAddress1, styles.google1Typo]}>
                Địa chỉ Email
            </Text>
            <Text style={[styles.password1, styles.google1Typo]}>Số điện thoại</Text>
            <Text style={[styles.mobilenumber, styles.google1Typo]}>Mật khẩu</Text>
            <View style={[styles.frameChild, styles.frameLayout]}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nhập địa chỉ email"
                    value={emailInput}
                    onChangeText={(text) => setEmailInput(text)}
                />
            </View>
            <View style={[styles.frameChild, styles.frameLayout1]}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nhập số điện thoại"
                    value={mobileInput}
                    onChangeText={(text) => setMobileInput(text)}
                />
            </View>
            <View style={[styles.frameChild, styles.frameLayout2]}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nhập mật khẩu"
                    value={passwordInput}
                    secureTextEntry={true} // Assuming it's a password input
                    onChangeText={(text) => setPasswordInput(text)}
                />
            </View>

            <Image
                style={[styles.eyeIcon, styles.eyeIconPosition]}
                resizeMode="cover"
                source={require("../assets/screens/login/img/eye.png")}
            />
            <Text style={[styles.rememberMe, styles.rememberMePosition]}>
                Tôi đồng ý với các điều khoản và dịch vụ
            </Text>
            <Image
                style={styles.checkedCheckboxIcon}
                resizeMode="cover"
                source={require("../assets/screens/login/img/checked-checkbox.png")}
            />
            <View style={styles.frameInner} />
            <TouchableHighlight
                style={styles.loginButton}
                onPress={handleRegister}
                underlayColor="lightgray"
            >
                <Text style={[styles.loginText, styles.loginTypo]}>Đăng ký</Text>
            </TouchableHighlight>

            <View style={[styles.lineView, styles.lineViewPosition]} />
            <View style={[styles.frameChild1, styles.lineViewPosition]} />
            <Text style={[styles.orLoginWith1, styles.loginTypo1]}>
                Hoặc đăng nhập với
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
                Bạn đã có tài khoản?
            </Text>

            {/* <Text style={[styles.signUp1, styles.signUp1Position]}>Login</Text> */}
            <Text
                style={[styles.signUp1, styles.signUp1Position]}
                onPress={handleLoginPress} // Add this onPress handler
            >
                Đăng nhập
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
        fontFamily: FontFamily.quicksandMedium,
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
    frameLayout2: {
        height: 33,
        width: 347,
        left: 25,
        top: 365,
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
        top: 370,
        left: 315,
        position: "absolute",
    },
    rememberMePosition: {
        top: 410,
        position: "absolute",
    },
    loginTypo: {
        fontFamily: FontFamily.quicksandBold,
        fontWeight: "600",
    },
    lineViewPosition: {
        borderTopWidth: 1,
        borderColor: Color.colorSilver_100,
        top: 550,
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
        top: 185,
        left: 25,
    },
    password1: {
        top: 260,
        left: 25,
    },
    mobilenumber: {
        top: 340,
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
    enterYourPassword2: {
        color: "#a89f9f",
        left: 38,
        top: 350,
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
        left: 55,
        fontSize: FontSize.size_smi,
        color: Color.colorBlack,
        fontFamily: FontFamily.quicksandRegular,
        textAlign: "left",
    },
    checkedCheckboxIcon: {
        width: 29,
        height: 20,
        left: 25,
        position: 'absolute',
        top: 410,
    },
    frameInner: {
        top: 399,
        height: 50,
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
        left: 30,
        width: 80,
    },
    orLoginWith1: {
        top: 537,
        left: 130,
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
        left: 240,
        fontFamily: FontFamily.quicksandBold,
        fontWeight: "600",
        color: Color.colorDarkcyan,
    },

    loginButton: {
        backgroundColor: '#FF937B',
        padding: 5,
        borderRadius: 5,
        position: 'absolute',
        top: 460,
        left: 25,
        width: 347,
        height: 39,
    },
    loginText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        top:5,
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
        top: 610, // Điều chỉnh vị trí theo cần thiết
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
        top: 610, // Điều chỉnh vị trí theo cần thiết
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

export default Register;
