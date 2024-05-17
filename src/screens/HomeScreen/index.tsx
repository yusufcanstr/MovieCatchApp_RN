import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import PopularMovieItem from "../../components/PopularMovieItem";
import RecentMovieItem from "../../components/RecentMovieItem";
import popularMovieList from "../../../assets/popularMovieList";
import { Movie } from "../../models";
import recentMovieList from "../../../assets/recentMovieList";

const { width, height } = Dimensions.get("window");

export default function index() {
  const [movieList, setMovieList] = useState<Movie[]>(popularMovieList);
  const [recentList, setRecentList] = useState<Movie[]>(recentMovieList)

  return (
    <ScrollView style={{ backgroundColor: "#070420" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 10,
          marginBottom: 6,
        }}
      >
        <Text style={{ fontWeight: "600", color: "white" }}>Popular Movie</Text>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white" }}>See All</Text>
            <Entypo name="chevron-small-right" size={24} color="#f9f9f9" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}
      >
        {movieList.map((item, index) => (
          <PopularMovieItem key={index} item={item} />
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginTop: 10,
          marginBottom: 6,
        }}
      >
        <Text style={{ fontWeight: "600", color: "white" }}>Recent Movie</Text>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white" }}>See All</Text>
            <Entypo name="chevron-small-right" size={24} color="#f9f9f9" />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        {recentList.map((item, index) => (
          <RecentMovieItem key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
