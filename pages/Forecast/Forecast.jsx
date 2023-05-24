import R from "ramda";
import { useNavigation, useRoute } from "@react-navigation/native";
import { s } from "./Forecast.style";
import Container from "../../components/Container/Container";
import Txt from "../../components/Txt/Txt";
import { TouchableOpacity, View } from "react-native";
import ForecastListItem from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { DAYS, DateToDDMM } from "../../services/date-service";

const Forecast = ({}) => {
  const { params } = useRoute();
  const nav = useNavigation();
  const mapIndexed = R.addIndex(R.map);

  const backButton = (
    <TouchableOpacity
      style={s.back_btn}
      onPress={() => {
        nav.goBack();
      }}
    >
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );
  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={s.subtitle}>Prévisions sur 7 jours</Txt>
      </View>
    </View>
  );
  const forecastList = (
    <View style={s.forecast_list}>
      {mapIndexed((param, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(param);
        const day = DAYS[date.getDay()];
        const temperature = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            key={param}
            day={day}
            date={DateToDDMM(date)}
            image={image}
            temperature={temperature.toFixed(0)}
          />
        );
      }, params.time)}
    </View>
  );
  return (
    <>
      {header}
      {forecastList}
    </>
  );
};

export default Forecast;
