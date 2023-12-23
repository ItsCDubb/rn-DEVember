import { WeatherForecast } from "@/app/(days)/day8/weather";
import { Text, View } from "react-native";
import { BlurView } from "expo-blur";
import dayjs from "dayjs";
import styles from "./styles";

const ForecastItem = ({ forecast }: { forecast: WeatherForecast }) => {
  return (
    <BlurView intensity={40} style={styles.container}>
      <Text style={styles.temp}>{forecast.main.temp}°</Text>
      <Text style={styles.date}>
        {dayjs(forecast.dt * 1000).format("ddd h a")}
      </Text>
    </BlurView>
  );
};

export default ForecastItem;
