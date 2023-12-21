import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Work with Markdown in React Native

## Screen to edit & view ***Markdown*** in ***React Native***

Setup a screen to edit & view *Markdown* files.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day3/editor" asChild>
        <Button title="Editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
