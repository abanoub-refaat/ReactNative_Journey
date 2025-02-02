import { View, Text, StyleSheet } from "react-native";

interface Props {
  children: String;
  style: Object;
}

export default function Box({ children, style }: Props) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
