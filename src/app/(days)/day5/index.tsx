import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Maps

📚 Today's Agenda:
- Introduction to React Native Maps
- Setting Up Map Views in Expo
- Adding Points of Interest to the Map
- Creating a Scrollable Carousel for POIs
- Synchronizing the Carousel with the Map
- Styling Map Components
- Handling User Interaction with Map and List
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
