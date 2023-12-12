import { Button, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Stack } from "expo-router";

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
      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} />
    </View>
  );
};

export default AnimationScreen;
