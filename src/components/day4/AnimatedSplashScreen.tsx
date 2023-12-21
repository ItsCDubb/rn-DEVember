import Animated, { ZoomOut } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { useRef } from "react";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
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
      <AnimatedLottieView
        exiting={ZoomOut}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        autoPlay
        loop={false}
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

export default AnimatedSplashScreen;
