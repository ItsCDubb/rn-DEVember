import { ScrollView, StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";
import { PropsWithChildren } from "react";
import styles from "./styles";

const markdownStyles = StyleSheet.create({
  heading1: {
    color: "#212020",
    fontFamily: "AmaticBold",
    fontSize: 55,
    marginTop: 20,
    marginBottom: 10,
    lineHeight: 55,
  },
  heading2: {
    color: "#404040",
    fontFamily: "InterBold",
    fontSize: 25,
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
