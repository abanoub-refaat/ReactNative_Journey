import { View, Text, Image, ImageBackground } from "react-native";

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logoImage} style={{ width: 200, height: 200 }} />
      <Image
        source={{ uri: "https://picsum.photos/200/300?grayscale" }}
        style={{ width: 200, height: 300 }}
      /> */}
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text>Image text</Text>
      </ImageBackground>
    </View>
  );
}
