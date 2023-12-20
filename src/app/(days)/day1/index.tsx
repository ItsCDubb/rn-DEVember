import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Setting up the Expo & React Native development environment

   - Setup your development environment.
   - Create a new project with Expo.
   - Explore Expo Router.
   - Building the core of the app:
     - Display Lists, Styling, Screen Navigation.
     - Effective project structure for development.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 1: The Advent Calendar" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
