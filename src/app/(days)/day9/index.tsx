import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Button, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";

const description = `
# Use AWS Amplify v6 to build an Auth flow 

## AWS Amplify Authentication flow using ***Expo*** & ***React Native***

Use AWS Amplify to create an Authentication Flow that users will use to authenticate themselves to the system so that they can use the app.
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 9: Authentication" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day9/auth" asChild>
        <Button title="Authentication" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
