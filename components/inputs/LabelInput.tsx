import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import ComponentLabel from "../texts/ComponentLabel";

interface LabelInputProps extends TextInputProps {
  label: string;
}

export default function LabelInput({ label, value, onChangeText }: LabelInputProps) {
  return (
    <View>
      <ComponentLabel text={label} />
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: "#dbdbdb", borderRadius: 8, paddingHorizontal: 8, height: 40 },
});
