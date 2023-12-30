import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Link } from "expo-router";

const ProtectedScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontFamily: "Inter", fontSize: 20, marginBottom: 20 }}>
        More Protected Info
      </Text>
      <FontAwesome5 name="lock" size={120} color="gray" />
      <Link href={"/day10/protected"}>Previous</Link>
    </View>
  );
};

export default ProtectedScreen;
