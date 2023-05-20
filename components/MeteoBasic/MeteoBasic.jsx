import { View, Image } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoBasic.style";

const MeteoBasic = () => {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <Txt>City</Txt>
      <Txt style={s.weather_label}>Label</Txt>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>3°</Txt>
        <Image style={s.image}></Image>
      </View>
    </>
  );
};

export default MeteoBasic;
