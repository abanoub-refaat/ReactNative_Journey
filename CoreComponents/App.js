import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setModalVisibility] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => setModalVisibility(true)}
          color="midnightblue"
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setModalVisibility(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text> Modal Content</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => setModalVisibility(false)}
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
