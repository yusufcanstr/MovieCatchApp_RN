import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import HomeNavigator from "../navigators/HomeNavigator";
import FavoriteNavigator from "../navigators/FavoriteNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen  from "../screens/SearchScreen";

import {
  Entypo,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="Anasayfa"
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: "#89889B",
      tabBarActiveTintColor:"#ffffff",
      headerShown: false,
      tabBarStyle: {
        height: 60,
        backgroundColor:"#24223B",
      },
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
