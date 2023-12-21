import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    gap: 15,
    backgroundColor: "white",
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
  playbackContainer: {
    flex: 1,
    justifyContent: "center",
    height: 80,
  },
  playbackBackground: {
    height: 3,
    borderRadius: 5,
    backgroundColor: "gainsboro",
  },
  playbackIndicator: {
    position: "absolute",
    width: 15,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "royalblue",
  },
  wave: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  waveLine: {
    flex: 1,
    height: 30,
    borderRadius: 20,
    backgroundColor: "gainsboro",
  },
});

export default styles;
