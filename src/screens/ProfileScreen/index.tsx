import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import ProfileHeader from "../../components/ProfileHeader";

const { width, height } = Dimensions.get("window");

export default function index() {
  return (
    <View>
      <ProfileHeader/>
    </View>
  )
}

const styles = StyleSheet.create({})