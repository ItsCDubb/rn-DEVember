import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text1: {
    fontFamily: "InterBold",
    fontSize: 30,
  },
  text2: {
    color: "gray",
    fontFamily: "InterSemi",
    fontSize: 20,
  },
  customAuthContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  customAuthTitle: {
    color: "dimgray",
    fontFamily: "interSemi",
    fontSize: 24,
  },
  customAuthInput: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gainsboro",
    backgroundColor: "white",
  },
  signinHeader: {
    alignSelf: "center",
    marginBottom: 30,
    fontFamily: "AmaticBold",
    fontSize: 60,
  },
  signupHeader: {
    alignSelf: "center",
    marginBottom: 30,
    fontFamily: "AmaticBold",
    fontSize: 60,
  },
});

export default styles;
