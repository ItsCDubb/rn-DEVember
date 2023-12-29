import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import amplifyconfig from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyconfig);

const theme = {
  tokens: {
    colors: {
      white: "#fff",
      black: "#000",
      background: {
        // This will resolve to #fff in light mode
        // and #000 in dark mode because of the override below
        primary: "{colors.white}",
      },
      font: {
        primary: "{colors.black}",
      },
    },
  },
  overrides: [
    {
      colorMode: "dark",
      tokens: {
        colors: {
          white: "#000",
          black: "#fff",
        },
      },
    },
  ],
};

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <Authenticator.Provider>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Animated.View style={{ flex: 1 }} entering={FadeIn}>
            <Stack screenOptions={{}}>
              <Stack.Screen name="index" options={{ title: "DEVember" }} />
            </Stack>
          </Animated.View>
        </GestureHandlerRootView>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}
