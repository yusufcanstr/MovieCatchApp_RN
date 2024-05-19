import { Dimensions, StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";


const { width, height } = Dimensions.get("window");
export default function index() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={styles.main}>
        <Feather name="search" size={28} color="#C8C8D6" />
        <TextInput
          style={styles.txtInpText}
          placeholder="Search by title, genre, actorr"
          placeholderTextColor="#B8B7C9"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    backgroundColor: "#37364B",
    width: "92%",
    marginTop: width * 0.1,
    marginHorizontal:10,
    paddingHorizontal: width * 0.03,
    alignItems: "center",
    borderRadius: height * 0.035,
    shadowRadius: 10,
    height: height * 0.07,
  },
  txtInpText: {
    textAlign: "left",
    fontSize: 16,
    color: "#f8f8f8",
    fontWeight:"400",
    marginHorizontal: 16,
  },
});
