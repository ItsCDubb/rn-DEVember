import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Working with Maps using React Native

## View overlays on a map in ***React Native***

Setup a screen of a map to view *overlays* as well as added a bottom sheet FlatList from ***React Native Bottom Sheet***.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day5/map" asChild>
        <Button title="Map" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
