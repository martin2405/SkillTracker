import { StyleSheet, Text } from "react-native";

interface ComponentLabelProps {
  text: string;
}

export default function ComponentLabel({ text }: ComponentLabelProps) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: { fontFamily: "Manrope-Regular", marginLeft: 8, marginBottom: 4, fontSize: 14 },
});
