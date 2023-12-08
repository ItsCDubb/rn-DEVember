import { Text, View } from "react-native";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 60 }}>
        React Native & Expo Setup
      </Text>
      <Text style={{ paddingBottom: 5, fontFamily: "Inter", fontSize: 30 }}>
        Advent Calendar
      </Text>
      <View>
        <Text style={{ padding: 7 }}>
          Today an Advent Calendar for the projects that will be built during
          this entire month was created. Setup the environment for both React
          Native & Expo. During this I added both the Amatic & Inter fonts from
          Google.
        </Text>
      </View>
    </View>
  );
};

export default DayDetailsScreen;
