import { Text, View } from "react-native";
import styles from "../../styles/day9Styles";

const AuthScreen = () => {
  return (
    <View>
      <Text style={styles.text1}>Auth Screen</Text>
      <Text style={styles.text2}>Congrats! You're Authenticated</Text>
    </View>
  );
};

export default AuthScreen;
