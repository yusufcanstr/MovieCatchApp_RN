import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const {width, height} = Dimensions.get("window");

export default function index() {
  return (
    <View style={{backgroundColor:"#070420", alignItems: "center", justifyContent: "center", paddingVertical:30, }}>
      <Text style={styles.txtSave}>Save</Text>
      <Image style={styles.image} source={require("../../../assets/personel.jpg")}/>
      <Text style={styles.txtName}>Yusufcan Şentürk</Text>
      <Text style={styles.txtEmail}>yusufcansenturk3@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        borderWidth:4,
        borderColor:"#2D2D44",
        width:width*0.45,
        height:width*0.45,
        borderRadius:width*0.225,
        marginTop:30,
    },
    txtSave: {
        fontSize:25,
        fontStyle:"normal",
        color:"#EFF0F1",
        fontWeight:"400"
    },
    txtName: {
        fontSize:20,
        fontWeight:"700",
        color:"#FEFDFE",
        marginTop:10,
    },
    txtEmail:{
        color:"#8E98AD",
        marginTop:6,
    },
});
