import { s } from "./Container.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background.png";

const navTheme = { colors: { background: "transparent" } };

const Container = ({ children }) => {
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={backgroundImg}
        style={s.imgBackground}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>{children}</SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
};

export default Container;
