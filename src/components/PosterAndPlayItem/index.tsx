import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

function CustomPlayButton() {
  return (
    <TouchableOpacity
      style={{
        width: 85,
        height: 85,
        borderRadius: 44,
        backgroundColor: "#E10E33",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -40,
        right: 80,
      }}
    >
      <FontAwesome5 name="play" size={38} color="white" />
    </TouchableOpacity>
  );
}

export default function index({ image_url }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + image_url }}
        style={styles.image}
      />
      <CustomPlayButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070420",
    overflow: "visible",
  },
  image: {
    width: 150,
    height: 225,
    borderRadius: 10,
    marginHorizontal: 10,
    position: "absolute",
    top: -100,
  },
});
