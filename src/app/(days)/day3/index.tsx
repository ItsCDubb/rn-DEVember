import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Work with Markdown in React Native

- Markdown Syntax Overview
- Setup React Native for Markdown
- Implement Markdown rendering
- Styling Markdown content
- Using Markdown in React Native Components
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day3/editor" asChild>
        <Button title="Editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
