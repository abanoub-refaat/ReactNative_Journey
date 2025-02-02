import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import CustomButton from "../components/CustomButton";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeContaner}>
      <View style={styles.container}>
        <View style={[styles.box]}>
          <Text style={styles.text}>Hello!</Text>
          <CustomButton title="press me" onPress={() => alert("hello")} />
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
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "red",
        fontSize: 30,
        fontStyle: "normal",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
