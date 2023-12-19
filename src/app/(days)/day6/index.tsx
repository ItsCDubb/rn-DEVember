import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Swipe Animation

📚 Today's Agenda:
- Designing the Swipe animation made famous by Tinder in React Native
- Building the Basic Swipe Animation
- Advanced Techniques with Reanimated
- Customizing the Swipe Animation
- Handling User Interaction and Gestures
- Integrating the Animation with App Logic
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
