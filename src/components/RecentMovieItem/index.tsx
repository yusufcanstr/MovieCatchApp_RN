import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Movie } from "../../models";
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");
type movieItemType = {
  item: Movie;
};

export default function index({ item }: movieItemType) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems:"flex-start",
        marginHorizontal: 10,
        borderRadius:10,
        shadowRadius:10,
        paddingVertical:8,
        paddingLeft:10,
        marginVertical: 7,
        backgroundColor: "#25233D",
      }}
    >
      <Image
        style={{
          width: height * 0.12,
          height: height * 0.18,
          borderRadius: 10,
        }}
        source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
      />
      <View style={styles.txtView}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text style={styles.txtGenres}>{item.genre_ids}</Text>
        <Text style={styles.txtReleaseData}>{item.release_date}</Text>
        <View style={{flexDirection:"row", marginTop:6,alignItems:"center"}}>
            {/*İcon ve text imdb puanı*/}
            <AntDesign name="star" size={16} color="#E00D32" />
            <Text style={styles.txtVote}>{item.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txtView: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  txtTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop:4,
    maxWidth:height * 0.29,
  },
  txtGenres: {
    color: "lightgray",
    fontSize: 14,
    fontWeight: "bold",
    marginTop:4,
  },
  txtReleaseData: {
    color: "#B8BACE",
    fontSize: 12,
    fontWeight: "bold",
    marginTop:4,
  },
  txtVote: {
    color: "#f8f8f8",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft:3,
  }
});
