import { ScrollView, StyleSheet, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";
import styles from "./styles";
import { PropsWithChildren } from "react";

const markdownStyles = StyleSheet.create({
  heading1: {
    color: "#212020",
    fontFamily: "InterBlack",
    fontSize: 40,
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    color: "#404040",
    fontFamily: "InterBold",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page}>
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;
