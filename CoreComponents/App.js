import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  StatusBar,
  Modal,
} from "react-native";
import { useState } from "react";

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [iStatusVisible, setStatusVisibility] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={iStatusVisible}
      />
      <ScrollView>
        <Button
          title="Show/Hide the Status Bar"
          color="black"
          onPress={() => setStatusVisibility(!iStatusVisible)}
        />
      </ScrollView>
    </View>
  );
}
