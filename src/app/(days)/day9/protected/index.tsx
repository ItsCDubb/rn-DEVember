import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Button, Text, View } from "react-native";
import { signUp } from "aws-amplify/auth";
import styles from "../../../styles/day9Styles";

const AuthScreen = () => {
  const { signOut } = useAuthenticator();
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.text1}>Auth Screen</Text>
      <Text style={styles.text2}>Congrats! You're Authenticated</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default AuthScreen;
