import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import PopularMovieItem from "../../components/PopularMovieItem";
import popularMovieList from "../../../assets/popularMovieList";
import { Movie } from "../../models";

export default function index() {
  const [movieList, setMovieList] = useState<Movie[]>(popularMovieList);

  return (
    <View style={{ flex: 1 , backgroundColor:"#070420"}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop:10,
          marginBottom:6
        }}
      >
        <Text style={{fontWeight:"600", color:"white"}}>Popular Movie</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{color:"white"}}>See All</Text>
          <Entypo name="chevron-small-right" size={24} color="#f9f9f9" />
        </View>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        style={{ backgroundColor: "white" }}
      >
        {movieList.map((item, index) => (
          <PopularMovieItem key={index} item={item} />
        ))}
      </ScrollView>

    
    </View>
  );
}

const styles = StyleSheet.create({});
