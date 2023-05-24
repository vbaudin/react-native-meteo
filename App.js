import Home from "./pages/Home/Home";
import Forecast from "./pages/Forecast/Forecast";

import { s } from "./App.style";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Container from "./components/Container/Container";
const Stack = createNativeStackNavigator();

const App = () => {
  const [isFontLoaded] = useFonts({
    "Alasta-Regular": AlataRegular,
  });
  return (
    <Container>
      {isFontLoaded ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "fade" }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      ) : null}
    </Container>
  );
};

export default App;
