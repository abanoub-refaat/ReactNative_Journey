import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
}

const CustomButton = ({ onPress, title }: Props) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      borderRadius: 5,
      padding: 10,
    }}
  >
    <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text>
  </Pressable>
);

export default CustomButton;
