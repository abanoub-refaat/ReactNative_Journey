import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import pokemonList from "@/data.json";
import groupedpokemonList from "@/grouped-data.json";

const ItemSeparator = () => <View style={{ height: 16 }} />;

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
      <View style={styles.ScrollView}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.cardText}>{item.type}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          //horizontal={true}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={() => <Text>No pokemons found</Text>}
          ListHeaderComponent={() => (
            <Text style={styles.headerStyle}>Pokemon List</Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.footerText}>End of the list</Text>
          )}
        /> */}
        <SectionList
          sections={groupedpokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={ItemSeparator}
          SectionSeparatorComponent={ItemSeparator}
        />
      </View>
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
