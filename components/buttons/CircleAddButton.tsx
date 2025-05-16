import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import IconSymbol from "../ui/IconSymbol";

interface CircleAddButtonProps extends TouchableOpacityProps {}

export default function CircleAddButton({ onPress, style }: CircleAddButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <IconSymbol name={"plus"} color={"white"} size={32} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#007bff",
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 65 / 2,
  },
});
