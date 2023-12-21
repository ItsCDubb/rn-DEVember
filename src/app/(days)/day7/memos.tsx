import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MemoListItem, { Memo } from "@/components/day7/MemoListItem";
import { FlatList, Pressable, View } from "react-native";
import { Recording } from "expo-av/build/Audio";
import { Stack } from "expo-router";
import { useState } from "react";
import { Audio } from "expo-av";
import styles from "./styles";

export default function MemoScreen() {
  const [recording, setRecording] = useState<Recording>();

  const [memos, setMemos] = useState<Memo[]>([]);

  const [audioMetering, setAudioMetering] = useState<number[]>([]);

  const metering = useSharedValue(-100);

  async function startRecording() {
    try {
      setAudioMetering([]);
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
        undefined,
        100
      );
      setRecording(recording);
      console.log("Recording started");

      recording.setOnRecordingStatusUpdate((status) => {
        console.log(status.metering);
        if (status.metering) {
          metering.value = status.metering || -100;
          setAudioMetering((curVal) => [...curVal, status.metering || -100]);
        }
      });
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
    metering.value = -100;
    if (uri) {
      setMemos((existingMemos) => [
        { uri, metering: audioMetering },
        ...existingMemos,
      ]);
    }
  }

  const animatedRedCircle = useAnimatedStyle(() => ({
    width: withSpring(recording ? "75%" : "100%"),
    borderRadius: withTiming(recording ? 5 : 35),
  }));

  const animatedRecordWave = useAnimatedStyle(() => {
    const size = withTiming(
      interpolate(metering.value, [-160, -60, 0], [0, 0, -30]),
      { duration: 100 }
    );
    return {
      top: size,
      left: size,
      bottom: size,
      right: size,
    };
  });

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Voice Memo" }} />
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      <View style={styles.footer}>
        <View>
          <Animated.View style={[styles.recordWave, animatedRecordWave]} />
          <Pressable
            style={styles.recordButton}
            onPress={recording ? stopRecording : startRecording}
          >
            <Animated.View style={[styles.redCircle, animatedRedCircle]} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
