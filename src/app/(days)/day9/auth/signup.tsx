import { Button, Text, TextInput, View } from "react-native";
import { signUp } from "aws-amplify/auth";
import { Link, router } from "expo-router";
import { useState } from "react";
import styles from "../../../styles/day9Styles";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignUpPressed = async () => {
    setError("");
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {},
          autoSignIn: true,
        },
      });
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={styles.customAuthContainer}>
      <Text style={styles.signupHeader}>Create an account</Text>
      <Text style={styles.customAuthTitle}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.customAuthInput}
      />
      <Text style={styles.customAuthTitle}>Password:</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.customAuthInput}
      />
      <Button title="Sign Up" onPress={onSignUpPressed} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Link href={"/day9/auth/signin"}>Have an account? Sign In</Link>
    </View>
  );
};

export default SignUp;
