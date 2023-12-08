import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 60 }}>
        React Native & Expo Setup
      </Text>
      <Text style={{ fontFamily: "Inter", fontSize: 30 }}>Advent Calendar</Text>
      <View>
        <Text>
          Today an Advent Calendar for the projects that will be built during
          this entire month was created. We also set up the environment for both
          React Native & Expo.
        </Text>
      </View>
    </View>
  );
};

export default DayDetailsScreen;
