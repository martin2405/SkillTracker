import { CircleAddButton } from "@/components";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CircleAddButton style={styles.btn} onPress={() => router.navigate("/home/addGoal")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  btn: { position: "absolute", right: 0, bottom: 16 },
});
