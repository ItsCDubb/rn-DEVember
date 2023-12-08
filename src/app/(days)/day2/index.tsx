import { Text, View } from "react-native";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 60 }}>
        Animated Onboarding Flow
      </Text>
      <Text style={{ fontFamily: "Inter", fontSize: 30 }}>Onboarding</Text>
      <View>
        <Text>
          Today animated onboard screens were created for the project that I've
          been working on for #DEVember.
        </Text>
      </View>
    </View>
  );
};

export default DayDetailsScreen;
