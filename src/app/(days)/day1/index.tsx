import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

const description = `
# Setting up the development environment

## Advent Calendar seen on the index page using ***Expo*** & ***React Native***

Setup of the ***React Native*** development environment & utilized a FlatList from ***React Native*** as well as some things from ***Expo Router*** so navigation from one page to another is allowed.

Each day for 24 days will be a different feature displayed using the Advent Calendar.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 1" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
