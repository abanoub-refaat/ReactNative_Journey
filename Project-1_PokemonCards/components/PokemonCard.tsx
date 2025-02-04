import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ImageSourcePropType,
} from "react-native";

interface PokemonCardProps {
  name: string;
  image: ImageSourcePropType;
  type: string;
  hp: number;
  moves: string[];
  weaknessses: string[];
}

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌱" };
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    default:
      return { borderColor: "#A0A0A0", emoji: "🌱" };
  }
};

export default function PokemonCard({ ...props }: PokemonCardProps) {
  const { borderColor, emoji } = getTypeDetails(props.type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.hp}>❤️ {props.hp}</Text>
      </View>
      <Image
        style={styles.image}
        source={props.image}
        accessibilityLabel={`${props.name} pokemon`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{props.type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {props.moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          ًWeakness: {props.weaknessses.join(", ")}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderRadius: 18,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowOffSet: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 25,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 18,
    borderWidth: 2,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
