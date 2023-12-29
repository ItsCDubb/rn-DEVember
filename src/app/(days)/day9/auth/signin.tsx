import { Button, Text, TextInput, View } from "react-native";
import { signIn } from "aws-amplify/auth";
import { Link, router } from "expo-router";
import { useState } from "react";
import styles from "../../../styles/day9Styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignInPressed = async () => {
    setError("");
    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });
      if (isSignedIn) {
        router.push("/(days)/day9/protected");
      } else {
        setError("Something went wrong!");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={styles.customAuthContainer}>
      <Text style={styles.signinHeader}>Sign In</Text>
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
      <Button title="Sign In" onPress={onSignInPressed} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Link href={"/day9/auth/signup"}>New Here? Sign Up</Link>
    </View>
  );
};

export default SignIn;
