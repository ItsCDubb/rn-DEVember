import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: "white",
  },
  recordButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "gainsboro",
  },
  redCircle: {
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: "orangered",
  },
});

export default styles;
