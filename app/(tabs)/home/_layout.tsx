import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#ffffff" },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        animation: "fade",
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="addGoal" options={{ title: "New Goal" }} />
    </Stack>
  );
}
