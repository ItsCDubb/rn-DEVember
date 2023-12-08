import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#15141a",
  },
  pageContent: {
    padding: 20,
  },
  title: {
    color: "#fdfdfd",
    fontFamily: "InterBold",
    fontSize: 26,
    letterSpacing: 1.3,
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  description: {
    color: "gray",
    fontFamily: "Inter",
    fontSize: 18,
  },
  footer: {
    marginTop: "auto",
  },
});

export default styles;
