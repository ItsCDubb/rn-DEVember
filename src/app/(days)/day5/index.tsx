import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Working with Maps using React Native

- Settup Map Views in Expo
- Add Points of Interest (POI) to the Map
- Create a scrollable carousel for POIs
- Synchronize the Carousel with the Map
- Style Map Components
- Handle User Interaction with Map and List
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day5/map" asChild>
        <Button title="Map" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
