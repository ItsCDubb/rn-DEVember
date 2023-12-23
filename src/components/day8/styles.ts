import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 3 / 4,
    borderColor: "#fefefe",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    overflow: "hidden",
  },
  temp: {
    color: "#fefefe",
    marginVertical: 10,
    fontFamily: "InterBlack",
    fontSize: 25,
  },
  date: {
    color: "#fefefe",
    fontFamily: "Inter",
    fontSize: 16,
  },
});

export default styles;
