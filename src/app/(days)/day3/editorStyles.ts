import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
  },
  tabsContainer: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
  },
  tabText: {
    fontFamily: "InterBold",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default styles;
