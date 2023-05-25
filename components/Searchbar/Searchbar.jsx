import { TextInput } from "react-native";
import { s } from "./Searchbar.style";

const Searchbar = ({ onSubmit }) => {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.input}
      placeholder="Cherche une ville... Ex: Paris"
    />
  );
};

export default Searchbar;
