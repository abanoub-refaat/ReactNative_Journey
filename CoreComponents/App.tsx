import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  StatusBar,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [istatusVisible, setStatusVisibility] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
      <ActivityIndicator
        size={"large"}
        color={"black"}
        animating={!istatusVisible}
      />
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={istatusVisible}
      />
      <ScrollView>
        <Greet name="Abanoub" />
        <Button
          title="Show/Hide the Status Bar"
          color="black"
          onPress={() => setStatusVisibility(!istatusVisible)}
        />
        <Button
          title={"Alert"}
          color="black"
          onPress={() =>
            Alert.alert(
              "Hi from the Alert Component!",
              "Hello! this is an Optional msg!",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                },
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                },
              ]
            )
          }
        />
      </ScrollView>
    </View>
  );
}
