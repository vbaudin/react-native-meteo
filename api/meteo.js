import axios from "axios";

export const fetchWeatherFromCoords = async (coords) => {
  return (
    await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    )
  ).data;
};

export const fetchCityFromCoords = async (coords) => {
  const {
    address: { city, village },
  } = (
    await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
    )
  ).data;
  return city || village;
};

export const fetchCoordsFromCity = async (city) => {
  try {
    const { latitude: lat, longitude: lng } = (
      await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`
      )
    ).data.results[0];
    return { lat, lng };
  } catch (e) {
    throw "Pas de coordonnées pour la recherche : " + city;
  }
};
