import { CircleAddButton } from "@/components";
import GoalItem from "@/components/ui/GoalItem";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <GoalItem goal={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.containerStyle}
      />
      <CircleAddButton style={styles.btn} onPress={() => router.navigate("/home/addGoal")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  separator: { height: 16 },
  containerStyle: { marginHorizontal: 1 },
  btn: { position: "absolute", right: 0, bottom: 16 },
});

const data = [
  {
    name: "Daily meditation",
    tags: ["Meditation"],
  },
  {
    name: "scianka tak o normalnie scianka tak o normalnie scianka tak o normalnie",
    tags: ["Meditation", "Public speaking", "Language Learning"],
  },
  {
    name: "bieganie raz w tygodniu",
    tags: ["Fitness"],
  },
  {
    name: "uciekać od zycia",
    tags: ["Productivity", "Meditation"],
  },
  {
    name: "nic nie robić codziennie",
    tags: ["Design", "Music", "Reading"],
  },
];
