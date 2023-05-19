import Home from "./pages/Home/Home";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import backgroundImg from "./assets/background.png";

import { s } from "./App.style";
import { ImageBackground } from "react-native";

const App = () => {
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.imgBackground}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
