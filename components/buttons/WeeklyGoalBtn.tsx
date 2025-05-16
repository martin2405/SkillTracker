import { colors } from "@/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ComponentLabel from "../texts/ComponentLabel";
import IconSymbol from "../ui/IconSymbol";

interface WeeklyGoalBtnProps {
  daysPerWeek: number;
  addDay: () => void;
  subtractDay: () => void;
}

export default function WeeklyGoalBtn({ daysPerWeek, addDay, subtractDay }: WeeklyGoalBtnProps) {
  const addingDisabled = daysPerWeek === 7;
  const subtractingDisabled = daysPerWeek === 1;

  const getText = () => {
    if (subtractingDisabled) {
      return "1 day per week";
    } else {
      return `${daysPerWeek} days per week`;
    }
  };

  return (
    <View>
      <ComponentLabel text={"Weekly goal"} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity disabled={subtractingDisabled} onPress={subtractDay} style={styles.btn}>
          <IconSymbol name="minus" color={subtractingDisabled ? colors.disabled : colors.primary} />
        </TouchableOpacity>
        <Text style={styles.text}>{getText()}</Text>
        <TouchableOpacity disabled={addingDisabled} onPress={addDay} style={styles.btn}>
          <IconSymbol name="plus" color={addingDisabled ? colors.disabled : colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
    alignItems: "center",
  },
  btn: { paddingHorizontal: 16, height: 40, justifyContent: "center" },
  text: { fontFamily: "Manrope-Medium", width: 90, textAlign: "center" },
});
