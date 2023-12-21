import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Working with a Splashscreen in React Native

## Custom splash screen using ***Lottie*** & ***React Native***

Setup a demo Splashscreen using the one provided by ***Expo*** & an animation from ***Lottie***.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day4/animation" asChild>
        <Button title="Animation" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="Splashscreen" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
