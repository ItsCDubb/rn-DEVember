import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Work with Onboarding Screens in React Native

- Design principles for Onboarding Screens
- Explore Reanimated Library
- Build animated onboarding screens
- Enhance user experience (UE) with layout animations
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day2/onboarding" asChild>
        <Button title="Onboarding" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
