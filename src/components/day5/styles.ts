import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    backgroundColor: "white",
  },
  //   Card
  card: {
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    height: 150,
    aspectRatio: 1,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginBottom: 10,
    fontFamily: "InterBold",
    fontSize: 16,
  },
  description: {
    color: "gray",
  },
  price: {
    fontFamily: "InterBold",
  },
  rightPanelFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});

export default styles;
