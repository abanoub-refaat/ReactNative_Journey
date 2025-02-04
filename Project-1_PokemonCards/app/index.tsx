import { SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  const charmanderData = {
    name: "Charmander",
    image: require("@/assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Fire Spin", "Flame Wheel"],
    weaknessses: ["Water", "Ground", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("@/assets/images/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Bubble", "Bubble Beam"],
    weaknessses: ["Grass", "Electric", "Rock"],
  };
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("@/assets/images/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Razor Leaf", "Seed Bomb"],
    weaknessses: ["Fire", "Ice", "Flying"],
  };
  const pikachuData = {
    name: "Pikachu",
    image: require("@/assets/images/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunder Shock", "Thunder Bolt", "Thunder Wave"],
    weaknessses: ["Ground", "Electric", "Ice"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
