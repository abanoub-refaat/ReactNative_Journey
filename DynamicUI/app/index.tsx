import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeContaner}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={styles.text}>Hello!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContaner: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
