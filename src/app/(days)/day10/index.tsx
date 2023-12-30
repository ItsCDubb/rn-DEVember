import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Biometric security of an App

## Usage of Biometric information to secure pages of an app using ***Expo*** & ***React Native***

Use Biometric information like FaceID or Fingerprints to create a Secure environment that users will use to unlock the next screen of the app so that they can use it.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 10: Biometrics" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day10/protected" asChild>
        <Button title="Biometrics" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
