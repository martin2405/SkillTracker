import { Pressable, StyleSheet, Text, View } from "react-native";
import TagBtn from "../buttons/TagBtn";

interface GoalItem {
  goal: any;
}

export default function GoalItem({ goal }: GoalItem) {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Text style={styles.title} numberOfLines={1}>
        {goal.name}
      </Text>
      <View style={styles.tagsContainer}>
        {goal.tags.map((tag: string) => (
          <TagBtn tag={tag} isActive disabled key={tag} />
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  title: { fontSize: 18, fontFamily: "Manrope-SemiBold" },
  tagsContainer: { flexDirection: "row", gap: 8, marginTop: 12, flexWrap: "wrap" },
});
