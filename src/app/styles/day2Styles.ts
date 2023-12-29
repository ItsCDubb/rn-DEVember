import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141a",
  },
  pageContent: {
    flex: 1,
    padding: 20,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    gap: 8,
  },
  stepIndicator: {
    flex: 1,
    marginTop: 20,
    width: 100,
    height: 3,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  title: {
    color: "#fdfdfd",
    fontFamily: "InterBlack",
    fontSize: 50,
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  image: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  description: {
    color: "gray",
    fontFamily: "Inter",
    fontSize: 20,
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#302e38",
  },
  buttonText: {
    color: "#fdfdfd",
    padding: 15,
    paddingHorizontal: 25,
    fontFamily: "InterSemi",
    fontSize: 16,
  },
});

export default styles;
