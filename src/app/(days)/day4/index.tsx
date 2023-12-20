import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import styles from "./styles";

const description = `
# Working with a Splashscreen in React Native

- Setup the default Splash Screen
- Design a custom Splash Screen
- Integrate Lottie Animations
- Configure Lottie with React Native and Expo
- Best Practices for Splash Screen Animations
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Splashscreen" }} />
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
