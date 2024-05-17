import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function index() {
  const MenuButtonItem = ({ title, iconName, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.content}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#3B3952",
              margin: 8,
              borderRadius: 20,
              marginTop:13,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {iconName && (
              <FontAwesome5
                name={iconName}
                size={20}
                color="white"
                style={styles.icon}
              />
            )}
          </View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: "#070420", width: "100%", height: "90%" }}>
      <ScrollView
        style={{
          backgroundColor: "#0E0C25",
          width: "92%",
          height: "100%",
          marginHorizontal: 16,
          borderRadius: 30,
        }}
      >
        {/* Menu Buttonları */}
        <MenuButtonItem
          title={"My Profile"}
          iconName={"user"}
          onPress={console.log("Profil button")}
        />

        <MenuButtonItem
          title={"Notification"}
          iconName={"bell"}
          onPress={console.log("Notification button")}
        />

        <MenuButtonItem
          title={"History"}
          iconName={"history"}
          onPress={console.log("History button")}
        />

        <MenuButtonItem
          title={"Calendar"}
          iconName={"calendar-alt"}
          onPress={console.log("Calendar button")}
        />

        <MenuButtonItem
          title={"Setting"}
          iconName={"cog"}
          onPress={console.log("Setting button")}
        />

        <MenuButtonItem
          title={"Help"}
          iconName={"question-circle"}
          onPress={console.log("Help button")}
        />

        <MenuButtonItem
          title={"Logout"}
          iconName={"sign-out-alt"}
          onPress={console.log("Logout button")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 10,
    marginHorizontal:2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {},
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
  },
});

{
  /*


*/
}
