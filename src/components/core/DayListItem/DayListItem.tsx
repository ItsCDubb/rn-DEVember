import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/days/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}
