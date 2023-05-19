import { Text, View } from "react-native";
import { s } from "./Home.style";

const Home = () => {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={{ fontSize: 60, color: "white" }}></Text>
      </View>
      <View style={s.search_bar}></View>
      <View style={s.meteo_advanced}></View>
    </>
  );
};

export default Home;
