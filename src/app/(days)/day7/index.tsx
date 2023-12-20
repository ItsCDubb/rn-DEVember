import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Work with the Microphone & Audio Playback 

- Implement Audio Playback Features
- Integrate Expo Audio with the app
- Save audio files on the Device
- Display audio waveforms
- Design the User Interface
- Test audio functionality
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
