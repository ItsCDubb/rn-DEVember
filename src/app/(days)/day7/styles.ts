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
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "gainsboro",
    backgroundColor: "white",
  },
  recordWave: {
    position: "absolute",
    borderRadius: 1000,
    backgroundColor: "#ff000055",
    zIndex: -1000,
  },
  redCircle: {
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: "orangered",
  },
});

export default styles;
