import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import styles from "./styles";

type Card = {
  user: {
    image: string;
    name: string;
  };
  numOfCards: number;
  index: number;
  activeIndex: SharedValue<number>;
  onResponse: (a: boolean) => void;
};

const screenWidth = Dimensions.get("screen").width;

const Card = ({ user, numOfCards, index, activeIndex, onResponse }: Card) => {
  const translationX = useSharedValue(0);
  const animatedCard = useAnimatedStyle(() => ({
    opacity: interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [1 - 1 / 5, 1, 1]
    ),
    transform: [
      {
        scale: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [0.95, 1, 1]
        ),
      },
      {
        translateY: interpolate(
          activeIndex.value,
          [index - 1, index, index + 1],
          [-30, 0, 0]
        ),
      },
      {
        translateX: translationX.value,
      },
      {
        rotateZ: `${interpolate(
          translationX.value,
          [-screenWidth / 2, 0, screenWidth / 2],
          [-15, 0, 15]
        )}deg`,
      },
    ],
  }));
  const gesture = Gesture.Pan()
    .onChange((event) => {
      translationX.value = event.translationX;
      activeIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [index, index + 0.8]
      );
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 400) {
        translationX.value = withSpring(Math.sign(event.velocityX) * 500, {
          velocity: event.velocityX,
        });
        activeIndex.value = withSpring(index + 1);
        runOnJS(onResponse)(event.velocityX > 0);
      } else {
        translationX.value = withSpring(0);
      }
    });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.card,
          animatedCard,
          {
            zIndex: numOfCards - index,
          },
        ]}
      >
        <Image
          source={{
            uri: user.image,
          }}
          style={[StyleSheet.absoluteFillObject, styles.image]}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />
        <View style={styles.footer}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;
