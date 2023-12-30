import { useBiometrics } from "@/components/day10/BiometricsProvider";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { Slot } from "expo-router";

export default function BiometricProtectedLayout() {
  const { isUnlocked, authenticate } = useBiometrics();

  useEffect(() => {
    if (!isUnlocked) {
      authenticate();
    }
  }, []);

  if (!isUnlocked) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontFamily: "Inter", fontSize: 20, marginBottom: 20 }}>
          Use Biometrics to unlock
        </Text>
        <FontAwesome5
          onPress={authenticate}
          name="fingerprint"
          size={120}
          color="gray"
        />
      </View>
    );
  }

  return <Slot />;
}
