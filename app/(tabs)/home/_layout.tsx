import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#ffffff" },
        headerShadowVisible: false,
        animation: "fade",
      }}>
      <Stack.Screen name="index" options={{ title: "Active goals" }} />
      <Stack.Screen name="addGoal" options={{ title: "New Goal" }} />
    </Stack>
  );
}
