import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;
export const cardWidth = screenWidth * 0.8;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    justifyContent: "flex-end",
    width: cardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    borderRadius: 15,
  },
  overlay: {
    top: "50%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footer: {
    padding: 10,
  },
  name: {
    color: "white",
    fontFamily: "InterBold",
    fontSize: 24,
  },
});

export default styles;
