import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { AntDesign } from "@expo/vector-icons";
import RecommendationsItem from "../../components/RecommendationsItem";
import popularMovieList from "../../../assets/popularMovieList";
import { Movie } from "../../models";

const { width, height } = Dimensions.get("window");
export default function index() {
  const [movieList, setMovieList] = useState<Movie[]>(popularMovieList);

  function SearchRecentText({ searchText }) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#211F39",
          height: height * 0.05,
          borderRadius: height * 0.03,
          paddingHorizontal:10,
          marginTop: 10,
          marginHorizontal:5,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <AntDesign name="clockcircleo" size={24} color="#C8C8D6" />
        <Text style={{ color: "#C8C8D6", marginHorizontal: 8 }}>
          {searchText}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#070420" }}>
      <View>
        <SearchBar />
        <Text
          style={{
            fontSize: 20,
            color: "#f8f8f8",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          Recent Searches
        </Text>
        <View
          style={{
            width: "100%",
            padding:10,
            height: height * 0.15,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {["Marvel","Thor", "Captain america", "Captain Marvel", ].map(
            (item) => (
              <SearchRecentText searchText={item} />
            )
          )}
        </View>

        {/*Popular Movi List*/}

        <Text
          style={{
            fontSize: 20,
            color: "#f8f8f8",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          Popular
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
        >
          {movieList.map((item, index) => (
            <RecommendationsItem key={index} item={item} />
          ))}
        </ScrollView>

        {/*Recommendations for you Movi List*/}

        <Text
          style={{
            fontSize: 20,
            color: "#f8f8f8",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          Recommendations for you
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
        >
          {movieList.map((item, index) => (
            <RecommendationsItem key={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
