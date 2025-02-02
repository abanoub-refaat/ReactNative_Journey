import { StyleSheet, View, StatusBar } from "react-native";
import Box from "../components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Box style={{ backgroundColor: "lightblue", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightgreen", flex: 3 }}>Box 3</Box>
      <Box style={{ backgroundColor: "gray" }}>Box 4</Box>
      <Box style={{ backgroundColor: "wheat" }}>Box 5</Box>
      <Box style={{ backgroundColor: "white" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 50,
    borderWidth: 64,
    borderColor: "pink",
  },
});
