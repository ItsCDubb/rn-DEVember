import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import styles from "./styles";

const description = `
# Animated splash screen
📚 Today's Agenda:
- Overview of Splash Screens in Apps
- Setting Up the Default Splash Screen
- Designing a Custom Splash Screen
- Integrating Lottie Animations
- Configuring Lottie with React Native and Expo
- Best Practices for Splash Screen Animations
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Animated Splash Screen" }} />
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
