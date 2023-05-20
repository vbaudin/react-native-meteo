import { Text } from "react-native";
import { s } from "./Txt.style";

const Txt = ({ children, style }) => {
  return <Text style={[s.text, style]}>{children}</Text>;
};

export default Txt;
