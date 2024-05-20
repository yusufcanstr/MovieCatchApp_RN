import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, Feather,MaterialIcons, Fontisto   } from '@expo/vector-icons';

const {width, height} = Dimensions.get("window");
export default function index() {
  return (
    <View style={{flexDirection:"row", marginTop:height*0.17,backgroundColor:"#070420", justifyContent:"center"}}>
      <TouchableOpacity style={styles.button}>
      <Entypo name="plus" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Feather name="heart" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <MaterialIcons name="file-download" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Fontisto name="share" size={25} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        width:60,
        height:60,
        borderRadius:9,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"#292B37",
        backgroundColor:"#292B37",
        marginHorizontal:15,
        marginVertical:10,
    }
})