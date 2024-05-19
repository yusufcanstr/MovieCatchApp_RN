import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Movie } from "../../models";
  
  const { width, height } = Dimensions.get("window");
  type movieItemType = {
    item: Movie;
  };
  export default function index({ item }: movieItemType) {
    return (
      <View
        style={{
          width: width * 0.27,
          marginTop: 0,
          paddingTop: 8,
          paddingStart: 1,
          paddingBottom: 10,
          height: height * 0.20,
          backgroundColor: "#070420",
        }}
      >
        <TouchableOpacity>
          <Image
            style={{
              width: height * 0.12,
              height: height * 0.18,
              borderRadius: 5,
            }}
            source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  