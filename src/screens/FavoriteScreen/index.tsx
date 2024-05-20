import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CollectionScreen from "../../screens/FavoriteScreen/CollectionScreen";
import FavoriteMovieScreen from "../FavoriteScreen/FavoriteMovieScreen";
import WatchListScreen from "../FavoriteScreen/WatchListScreen";

const Tab = createMaterialTopTabNavigator();

export default function index() {
  <Tab.Navigator
  screenOptions={{
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 100 , height:50,},
    tabBarStyle: { backgroundColor: 'red' },
  }}>
      <Tab.Screen name="FavoriteMovie" component={FavoriteMovieScreen} />
      <Tab.Screen name="WatchList" component={WatchListScreen} />
      <Tab.Screen name="Collection" component={CollectionScreen} />
    </Tab.Navigator>
}

const styles = StyleSheet.create({})