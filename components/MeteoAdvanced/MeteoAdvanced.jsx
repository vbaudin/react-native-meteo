import { View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./MeteoAdvanced.style";

const MeteoAdvanced = ({ dusk, dawn, wind }) => {
  return (
    <View style={s.advanced_box}>
      <View style={s.info_box}>
        <Txt style={s.info}>{dusk}</Txt>
        <Txt style={s.label}>Aube</Txt>
      </View>
      <View style={s.info_box}>
        <Txt style={s.info}>{dawn}</Txt>
        <Txt style={s.label}>Crépuscule</Txt>
      </View>
      <View style={s.info_box}>
        <Txt style={s.info}>{wind} km/h</Txt>
        <Txt style={s.label}>Vent</Txt>
      </View>
    </View>
  );
};

export default MeteoAdvanced;
