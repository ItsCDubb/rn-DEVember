import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import DayListItem from "../../src/components/core/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import styles from "../../styles";

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
}
