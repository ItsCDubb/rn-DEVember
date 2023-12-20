import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Working with Swipe Gestures in React Native

- Design the Swipe animation made famous by Tinder in React Native
- Build the Basic Swipe Animation
- Advanced Techniques with Reanimated
- Customize the Swipe Animation
- Handle User Interaction and Gestures
- Integrate the Animation with App Logic
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 6: Swipe Animation" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day6/swipe" asChild>
        <Button title="Swipe" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
