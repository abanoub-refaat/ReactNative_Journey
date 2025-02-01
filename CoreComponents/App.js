import { View, Text, Image, ScrollView, Button, Pressable } from "react-native";

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => console.log("Pressed!")}
          color="midnightblue"
        />
        <Pressable
          onPress={() => console.log("Image pressed")}
          onPressIn={() => console.log("Image pressed in")}
          onPressOut={() => console.log("Image pressed out")}
          onLongPress={() => console.log("Image long pressed")}
        >
          <Image source={logoImage} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Text pressd")}>
          <Text>
            lorem ipsum dolor sit amet, woth ,saova afaifjalfja iofsfjoasjf
            sfjajfaj oa tah aotiah aojaib sijoetush saosg gosjg ogj oijgs
            joishgs ao jsh sjgossohryvs vert s soseij sh ser s s
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
