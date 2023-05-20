import { View, Image } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoBasic.style";
import Clock from "../Clock/Clock";

const MeteoBasic = ({ temperature, city, interpretation }) => {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <Txt>{city}</Txt>
      <Txt style={s.weather_label}>{interpretation.label}</Txt>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation.image}></Image>
      </View>
    </>
  );
};

export default MeteoBasic;
