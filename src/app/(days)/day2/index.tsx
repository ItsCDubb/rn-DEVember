import { Button, SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 60 }}>
        Animated Onboarding Flow
      </Text>
      <View>
        <Text style={{ padding: 7 }}>
          Today added a few Animated Onboarding Screens using Expo Icons, React
          Gestures, and Reanimated. Nothing super complex, but pretty
          nonetheless.
        </Text>
      </View>
      <Link href="/day2/onboarding" asChild>
        <Button title="Onboarding Screens" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
