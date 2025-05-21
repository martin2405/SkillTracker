import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface TagBtn extends TouchableOpacityProps {
  tag: string;
  isActive: boolean;
}

export default function TagBtn({ tag, isActive, disabled, onPress }: TagBtn) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isActive ? colors.tagBackground : "#fff",
          borderColor: isActive ? colors.tagBackground : colors.disabled,
        },
      ]}>
      <Text style={[styles.text, { color: isActive ? colors.primary : colors.disabled }]}>{tag}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { padding: 6, borderRadius: 8, borderWidth: 1, alignSelf: "flex-start" },
  text: { fontFamily: "Manrope-Regular" },
});
