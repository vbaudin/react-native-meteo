import { Image, View } from "react-native";
import { s } from "./ForecastListItem.style";
import Txt from "../Txt/Txt";

const ForecastListItem = ({ image, day, date, temperature }) => {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}°</Txt>
    </View>
  );
};

export default ForecastListItem;
