import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Work with the Microphone & Audio Playback 

## Record & View audio using ***Expo***, ***React Native***, ***React Native Reanimated***, & ***Expo AV***

A screen similar to what would be seen in iOS Voice Memos was created so you can see & hear audio that was recorded.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 7: Voice Memos" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day7/memos" asChild>
        <Button title="Voice Memo" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
