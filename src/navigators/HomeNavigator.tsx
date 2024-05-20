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
          headerStyle: { backgroundColor: "#23243D" },
          headerTitle: () => (
            <Text
              style={{ fontSize: 19, fontWeight: "bold", color: "#E10D32" }}
            >
              🍿Movie Catch
            </Text>
          ),
          headerRight: () => (
            //HomeScreen go to SearchScreen
            <TouchableOpacity > 
              <AntDesign name="search1" size={28} color="#E10D32" />
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
