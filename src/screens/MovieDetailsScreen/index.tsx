import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Movie } from "../../models";
import MainDetailImage from "../../components/MainDetailImage";
import PosterAndPlayItem from "../../components/PosterAndPlayItem";
import MovieActionButtons from "../../components/MovieActionButtons";
import MovieDetailsItem from "../../components/MovieDetailsItem";

export default function index(props) {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    setMovie(props.route.params.movie);
  });

  console.log("Our movie is ", movie);
  if (!movie) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#070420" }}>
      <MainDetailImage image_url={movie.backdrop_path} />
      <PosterAndPlayItem image_url={movie.poster_path} />
      <MovieActionButtons />
      <MovieDetailsItem item={movie}/>
    </View>
  );
}

const styles = StyleSheet.create({});
