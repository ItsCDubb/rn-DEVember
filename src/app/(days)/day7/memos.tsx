import { useState } from "react";
import { Button, FlatList, Pressable, Text, View } from "react-native";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MemoListItem from "@/components/day7/MemoListItem";
import styles from "./styles";

export default function MemoScreen() {
  const [recording, setRecording] = useState<Recording>();

  const [memos, setMemos] = useState<string[]>([]);

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    if (!recording) return;
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    if (uri) {
      setMemos((existingMemos) => [uri, ...existingMemos]);
    }
  }

  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withSpring(recording ? "75%" : "100%"),
    borderRadius: withTiming(recording ? 5 : 30),
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem uri={item} />}
      />
      <View style={styles.footer}>
        <Pressable
          style={styles.recordButton}
          onPress={recording ? stopRecording : startRecording}
        >
          <Animated.View style={[styles.redCircle, animatedRedCircle]} />
        </Pressable>
      </View>
    </View>
  );
}
