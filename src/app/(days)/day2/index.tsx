import { Button, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 60 }}>
        Animated Onboarding Flow
      </Text>
      <Link href="/day2/onboarding" asChild>
        <Button title="Onboarding Screens" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
