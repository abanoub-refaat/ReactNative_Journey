import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance <Text style={styles.boldText}>IN BOLD</Text>{" "}
        </Text>
      </View>
      <View>
        <Text style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
          {" "}
          Lightblue Box
        </Text>
      </View>
      <View>
        <Text style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
          {" "}
          Lightgreen Box
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  darkMode: {
    padding: 10,
    width: 250,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 10,
  },
  darkModeText: {
    color: "black",
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    shadowColor: "#333333",
    elevation: 10,
  },
});
