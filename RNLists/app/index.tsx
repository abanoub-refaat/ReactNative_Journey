import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import pokemonList from "@/data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.ScrollView}>
        {pokemonList.map((pokemon) => {
          console.log(pokemon.id);
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.name}</Text>
              <Text style={styles.cardText}>{pokemon.type}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardText}>{item.type}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        //horizontal={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
