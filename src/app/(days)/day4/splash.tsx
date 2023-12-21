import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useRef } from "react";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        ref={animation}
        style={{
          width: "80%",
          maxWidth: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/lottie/netflixAnimation.json")}
      />
    </View>
  );
};

export default AnimationScreen;
