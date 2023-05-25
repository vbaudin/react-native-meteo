import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

const Txt = ({ children, style }) => {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  return (
    <Text style={[s.text, style, { fontSize: fontSize * 0.0013 * height }]}>
      {children}
    </Text>
  );
};

export default Txt;
