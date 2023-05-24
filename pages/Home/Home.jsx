import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { Text, View } from "react-native";
import { s } from "./Home.style";
import { useEffect, useState } from "react";

import { fetchCityFromCoords, fetchWeatherFromCoords } from "../../api/meteo";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";

import { getWeatherInterpretation } from "../../services/meteo-service";
import MeteoAdvanced from "../../components/MeteoAdvanced/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import Container from "../../components/Container/Container";

const Home = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const nav = useNavigation();
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

  const getUserCoords = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
    console.log("***", coords);
  };

  const fetchWeather = async (coordinates) => {
    const weatherResponse = await fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  };

  const fetchCity = async (coordinates) => {
    const cityResponse = await fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  };

  const goToForecastPage = () => {
    nav.navigate("Forecast", { city, ...weather.daily });
  };

  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
          onPress={goToForecastPage}
        />
      </View>
      <View style={s.search_bar}></View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split("T")[1]}
          dawn={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </>
  ) : null;
};

export default Home;
