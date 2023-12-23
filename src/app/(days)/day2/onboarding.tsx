import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "../../styles/day2Styles";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome to #DEVember",
    description: "Daily React Native Tutorials during December",
  },
  {
    icon: "people-arrows",
    title: "Learn and Grow together",
    description: "Learn by building 24 projects with React Native and Expo",
  },
  {
    icon: "book-reader",
    title: "Education for children",
    description:
      "Contribute to the fundraiser 'Education for Children' to help Save the Children in their effort of providing education to every child",
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];
  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };
  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };
  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onBack),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onContinue)
  );
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              name={data.icon}
              size={150}
              color="#cef202"
              style={styles.image}
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInLeft}
              exiting={SlideOutRight}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInLeft.delay(50)}
              exiting={SlideOutRight}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.stepIndicatorContainer}>
            {onboardingSteps.map((step, index) => (
              <View
                style={[
                  styles.stepIndicator,
                  {
                    backgroundColor: index === screenIndex ? "#cef202" : "gray",
                  },
                ]}
                key={index}
              />
            ))}
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}
