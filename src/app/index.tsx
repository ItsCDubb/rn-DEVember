import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import DayListItem from "@components/core/DayListItem";
import styles from "../../styles";

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
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
