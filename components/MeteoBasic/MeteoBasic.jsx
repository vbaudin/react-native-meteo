import { View, Image } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

const MeteoBasic = ({ temperature, city, interpretation }) => {
  console.log(interpretation);
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
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
