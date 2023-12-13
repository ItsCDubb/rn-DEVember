import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Onboarding

📚 Today's Agenda:
- Introduction to Onboarding Flows
- Design Principles for Onboarding Screens
- Exploring Reanimated Library
- Building Your First Animated Onboarding Screen
- Enhancing User Experience with Layout Animations
- Interactive Session: Q&A and Live Coding
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
