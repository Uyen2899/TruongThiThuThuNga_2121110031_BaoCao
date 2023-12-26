import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SearchScreen = () => {
  return (
    <View style={styles.search}>
      <View style={styles.list}>
        <View>
          <View style={[styles.carousel, styles.s1IconLayout]}>
            <View style={[styles.slides, styles.slidesFlexBox]}>
              <Image
                style={styles.s1IconLayout}
                resizeMode="cover"
                source={require("../assets/screens/search/s1.png")}
              />
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.cardTitleParent}>
              <Text style={styles.cardTitle}>Đồ thể thao</Text>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={styles.text}>4,33</Text>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/screens/search/icon.png")}
                />
              </View>
            </View>
            <Text style={styles.milesTypo}>
            Những đường may tối giản hoá, giúp hạn chế tối đa sự ma sát từ các đường may trong quá trình vận động. Giúp người mặc tập trung hơn vào hoạt động của mình hơn.
            </Text>
            <Text style={styles.milesTypo}>14 - 21 Tháng 06</Text>
            <Text style={[styles.miles, styles.milesTypo]}>416 người mua</Text>
          </View>
          <Image
            style={styles.buttonIcon}
            resizeMode="cover"
            source={require("../assets/screens/search/button.png")}
          />
        </View>
        <View style={styles.card1}>
          <View style={[styles.carousel, styles.s1IconLayout]}>
            <View style={[styles.slides, styles.slidesFlexBox]}>
              <Image
                style={styles.s1IconLayout}
                resizeMode="cover"
                source={require("../assets/screens/search/s11.png")}
              />
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.cardTitleParent}>
              <Text style={styles.cardTitle}>
                The Southwestern United States
              </Text>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={styles.text}>4,97</Text>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/screens/search/icon1.png")}
                />
              </View>
            </View>
            <Text style={styles.milesTypo}>
            Những đường may tối giản hoá, giúp hạn chế tối đa sự ma sát từ các đường may trong quá trình vận động. Giúp người mặc tập trung hơn vào hoạt động của mình hơn.
            </Text>
            <Text style={styles.milesTypo}>9 - 15 Jun</Text>
            <Text style={[styles.miles, styles.milesTypo]}>327 miles</Text>
          </View>
          <Image
            style={styles.buttonIcon}
            resizeMode="cover"
            source={require("../assets/screens/search/button.png")}
          />
        </View>
      </View>
      <View style={[styles.recentSearchList, styles.searchPosition]}>
        <View style={[styles.recentSearchRow, styles.searchSpaceBlock]}>
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Recent searchs
          </Text>
        </View>
        <View style={[styles.recentSearchRow1, styles.searchSpaceBlock]}>
          <View style={[styles.iconParent, styles.slidesFlexBox]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Recent search #1
            </Text>
          </View>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
          </View>
        </View>
        <View style={[styles.recentSearchRow1, styles.searchSpaceBlock]}>
          <View style={[styles.iconParent, styles.slidesFlexBox]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Recent search #2
            </Text>
          </View>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
          </View>
        </View>
        <View style={[styles.recentSearchRow1, styles.searchSpaceBlock]}>
          <View style={[styles.iconParent, styles.slidesFlexBox]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Recent search #3
            </Text>
          </View>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
          </View>
        </View>
        <View style={[styles.recentSearchRow1, styles.searchSpaceBlock]}>
          <View style={[styles.iconParent, styles.slidesFlexBox]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Recent search #4
            </Text>
          </View>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
          </View>
        </View>
        <View style={[styles.recentSearchRow1, styles.searchSpaceBlock]}>
          <View style={[styles.iconParent, styles.slidesFlexBox]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Recent search #5
            </Text>
          </View>
          <View style={[styles.button, styles.buttonSpaceBlock]}>
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={require("../assets/screens/search/icon2.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.searchBar, styles.inputBorder]}>
        <Pressable
          style={[styles.input, styles.inputBorder]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/screens/search/icon3.png")}
          />
          <Text style={[styles.placeholder6, styles.placeholderTypo]}>
            Tìm kiếm
          </Text>
        </Pressable>
        <View style={[styles.rightIcon, styles.buttonSpaceBlock]}>
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/screens/search/icon4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  s1IconLayout: {
    height: 380,
    width: 350,
    overflow: "hidden",
  },
  slidesFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "row",
    marginRight:35,
  },
  milesTypo: {
    marginTop: 4,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.h6SemiBold,
    alignSelf: "stretch",
    marginRight:45,
  },
  searchPosition: {
    left: 0,
    position: "absolute",
  },
  searchSpaceBlock: {
    paddingRight: 10,
    paddingLeft: 5,
    width: 360,
  },
  placeholderTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.h6SemiBold,
    fontWeight: "600",
    flex: 1,
  },
  buttonSpaceBlock: {
    padding: 3,
    flexDirection: "row",
  },
  inputBorder: {
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  slides: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  carousel: {
    zIndex: 0,
    borderRadius: Border.br_base,
  },
  cardTitle: {
    fontSize: FontSize.h6SemiBold_size,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.h6SemiBold,
    color: Color.colorGray_100,
    fontWeight: "600",
    flex: 1,
  },
  text: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.h6SemiBold,
  },
  icon: {
    width: 14,
    height: 14,
    marginLeft: 2,
    overflow: "hidden",
  },
  parent: {
    justifyContent: "flex-end",
    marginLeft: 8,
  },
  cardTitleParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  miles: {
    fontWeight: "600",
    marginTop: 4,
  },
  frameParent: {
    zIndex: 1,
    marginTop: 12,
    alignSelf: "stretch",
  },
  buttonIcon: {
    top: 4,
    left: 280,
    width: 44,
    zIndex: 2,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  card1: {
    marginTop: 32,
  },
  list: {
    top: 130,
    left: 32,
    paddingBottom: 90,
    position: "absolute",
  },
  placeholder: {
    color: Color.colorLightgray,
  },
  recentSearchRow: {
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  icon2: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  placeholder1: {
    marginLeft: 4,
    color: Color.colorGray_100,
    lineHeight: 24,
  },
  iconParent: {
    height: 44,
    flex: 1,
  },
  button: {
    marginLeft: 25,
  },
  recentSearchRow1: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  recentSearchList: {
    top: -52,
    paddingBottom: 10,
    opacity: 0,
    backgroundColor: Color.colorWhite,
  },
  placeholder6: {
    color: "#999",
    marginLeft: 8,
  },
  input: {
    borderRadius: 100,
    backgroundColor: "#fbfbfb",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flex: 1,
  },
  rightIcon: {
    marginLeft: 4,
  },
  searchBar: {
    top:50,
    borderBottomWidth: 1,
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 5,
    width: 360,
    left: 30,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  search: {
    width: "100%",
    height: 780,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
  },
});

export default SearchScreen;
