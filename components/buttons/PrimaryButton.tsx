import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface PrimaryButtonProps extends TouchableOpacityProps {
  variant: "primary";
  text: string;
}

export default function PrimaryButton({ variant, text, disabled, onPress }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.btn, styles[variant], disabled ? styles.disabled : {}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 16,
  },
  text: { color: "white", fontFamily: "Manrope-Medium" },

  primary: { backgroundColor: colors.primary },
  disabled: { backgroundColor: colors.disabled },
});
