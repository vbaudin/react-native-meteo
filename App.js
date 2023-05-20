import Home from "./pages/Home/Home";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import backgroundImg from "./assets/background.png";

import { s } from "./App.style";
import { ImageBackground } from "react-native";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

const App = () => {
  const [isFontLoaded] = useFonts({
    "Alasta-Regular": AlataRegular,
  });
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.imgBackground}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
