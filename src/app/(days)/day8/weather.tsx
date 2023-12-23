import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ForecastItem from "@components/day8/ForecastItem";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Stack } from "expo-router";
import styles from "../../styles/day8Styles";

const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const OPEN_WEATHER_API_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY;
const bgImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg";

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type Weather = {
  name: string;
  main: MainWeather;
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
};

export type WeatherForecast = {
  main: MainWeather;
  dt: number;
};

const weather = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<WeatherForecast[]>();

  useEffect(() => {
    if (location) {
      fetchWeather();
      fetchForecast();
    }
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const fetchWeather = async () => {
    if (!location) return;
    const units = "imperial";
    const results = await fetch(
      `${BASE_URL}/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`
    );
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setWeather(data);
  };

  const fetchForecast = async () => {
    const units = "imperial";
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    if (!location) return;
    const results = await fetch(
      `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`
    );
    const data = await results.json();
    setForecast(data.list);
  };

  if (!weather) {
    <ActivityIndicator />;
  }

  return (
    <ImageBackground source={{ uri: bgImage }} style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0, 0, 0, 0.5",
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 35,
        }}
      >
        <LottieView
          source={
            weather?.weather[0].main === "Rain"
              ? require("@assets/lottie/rain.json")
              : require("@assets/lottie/sunny.json")
          }
          style={{
            width: 200,
            aspectRatio: 1,
          }}
          loop
          autoPlay
          // Find more Lottie files at https://lottiefiles.com/featured
        />
        <Text style={styles.location}>{weather?.name}</Text>
        <Text style={styles.temp}>{Math.round(weather?.main.temp)}°</Text>
      </View>
      <FlatList
        data={forecast}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, marginBottom: 40, height: 150 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 10,
        }}
        renderItem={({ item }) => <ForecastItem forecast={item} />}
      />
    </ImageBackground>
  );
};

export default weather;
