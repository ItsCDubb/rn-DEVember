import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Onboarding Screens

## Here's a few onboarding screens using ***Expo*** & ***React Native*** as well as swiping gestures

Setup some demo onboarding screens, utilized a couple animations from ***React Native Reanimated***, & some gestures from  ***React Native Gesture Handler***.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 2" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day2/onboarding" asChild>
        <Button title="Onboarding" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
