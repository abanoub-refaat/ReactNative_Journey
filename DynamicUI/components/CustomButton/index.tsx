import { Platform } from "react-native";

const CustomButton = Platform.select({
  ios: require("./CustomButton.iso").default,
  android: require("./CustomButton.android").default,
});

export default CustomButton;
