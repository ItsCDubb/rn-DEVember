import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import DayListItem from "./src/components/core/DevListItem/DayListItem";
import styles from "./styles";

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
}
