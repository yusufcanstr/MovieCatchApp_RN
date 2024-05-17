import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import ProfileHeader from "../../components/ProfileHeader";
import ProfileMenuItem from "../../components/ProfileMenuItem";

const { width, height } = Dimensions.get("window");

export default function index() {
  return (
    <View style={{flex:1,}}>
      <ProfileHeader/>
      <ProfileMenuItem/>
    </View>
  )
}

const styles = StyleSheet.create({})