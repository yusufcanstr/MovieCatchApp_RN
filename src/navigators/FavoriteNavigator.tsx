import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CollectionScreen from "../screens/FavoriteScreen/CollectionScreen";
import FavoriteMovieScreen from "../screens/FavoriteScreen/FavoriteMovieScreen";
import WatchListScreen from "../screens/FavoriteScreen/WatchListScreen";

const Tab = createMaterialTopTabNavigator();

export default function FavoriteNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#aaa",
        tabBarIndicatorStyle: {
          backgroundColor: "#e91e63",
        },
        tabBarStyle: {
          marginTop: 35,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteMovieScreen}
        options={{ tabBarLabel: "Favorite" }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchListScreen}
        options={{ tabBarLabel: "Watch List" }}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionScreen}
        options={{ tabBarLabel: "Collection" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
