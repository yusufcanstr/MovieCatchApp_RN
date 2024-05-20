import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Index({ image_url }) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + image_url }}
        style={styles.image}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={34}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="heart" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "30%",
    width: "100%",
  },
  image: {
    height: width * 0.7,
    width: width * 1,
    position: "absolute",
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    height: "20%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
