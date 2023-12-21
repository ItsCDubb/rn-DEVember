import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Gestures

## Work with swiping gestures in ***React Native***

Set up a screen & several cards of pictures made famous by Tinder using ***React Native Reanimated***.

`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 6" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day6/swipe" asChild>
        <Button title="Swipe" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
