import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { Text, View } from "react-native";
import { s } from "./Home.style";
import { useEffect, useState } from "react";

import { fetchWeatherFromCoords } from "../../api/meteo";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";

const Home = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  // MeteoAPI.toto();

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

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic />
      </View>
      <View style={s.search_bar}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
};

export default Home;
