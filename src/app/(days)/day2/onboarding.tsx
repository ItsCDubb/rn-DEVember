import { SafeAreaView, Text, View } from "react-native";
import { Stack } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./onboardingstyles";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <FontAwesome5
          name="people-arrows"
          size={70}
          color="#cef202"
          style={styles.image}
        />
        <View style={styles.footer}>
          <Text style={styles.title}>Track every transaction</Text>
          <Text style={styles.description}>
            Monitor your spending and contribution, ensuring every penny aligns
            with your family's aspirations
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
