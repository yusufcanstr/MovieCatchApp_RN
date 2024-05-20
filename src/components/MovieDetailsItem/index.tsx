import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../../models';

type movieItemType = {
    item: Movie;
  };

export default function index({item}: movieItemType) {
  return (
    <View>
      <Text style={styles.txtTitle}>{item.title}</Text>
      <Text style={styles.txtOverview}>{item.overview}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txtTitle:{
        color:"white",
        fontSize:21,
        paddingHorizontal:10,
        fontWeight:"600",
        marginTop:20,
    },
    txtOverview:{color:"white",
    fontSize:16,
    paddingHorizontal:10,
    fontWeight:"300",
    marginTop:10,},

})