import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Movie } from '../../models'

export default function index(props) {
  const [movie, setMovie] = useState<Movie>();
  useEffect(()=> {
    setMovie(props.route.params.movie);
  })

  console.log("Our movie is " , movie);
  if(!movie) {
    return <ActivityIndicator color={"#5D3EBD"}/>;
  }

  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})