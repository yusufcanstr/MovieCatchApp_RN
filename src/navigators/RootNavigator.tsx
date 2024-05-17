import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "../navigators/HomeNavigator";
import FavoriteScreen from "../screens/FavoriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
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
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
