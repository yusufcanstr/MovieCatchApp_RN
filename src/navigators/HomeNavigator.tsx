import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  useNavigation,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get("window");

function MyStack() {
  return (
    //HomeScreen
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerTitle: () => (
            <Text
              style={{ fontSize: 19, fontWeight: "bold", color: "#0881A3" }}
            >
              🍿Movie Catch
            </Text>
          ),
          headerRight: () => (
            //HomeScreen go to SearchScreen
            <TouchableOpacity> 
              <AntDesign name="search1" size={24} color="#0881A3" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>

    //MovieDetails Screen

    //Search Screen
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}

const styles = StyleSheet.create({});
