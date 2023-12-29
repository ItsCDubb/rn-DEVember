import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Work with APIs to build a weather app 

## Fetch data from Public APIs using ***Expo*** & ***React Native***

A screen similar to a weather application has been created so you can interact with the data presented. I used very basic Lottie animations to add depth to the feature that I created.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 8: Weather Tracking" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day8/weather" asChild>
        <Button title="Weather App" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
