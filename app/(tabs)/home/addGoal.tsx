import { LabelInput, TagsList, WeeklyGoalBtn } from "@/components";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { addGoalInitValues, addGoalValidationSchema } from "@/validators/addGoalValidator";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { useCallback } from "react";
import { View } from "react-native";

export default function AddGoal() {
  const router = useRouter();

  const submitAddGoal = () => {
    router.back();
  };

  const { values, isValid, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: addGoalInitValues,
    validationSchema: addGoalValidationSchema,
    onSubmit: submitAddGoal,
    validateOnMount: true,
  });

  const handleTag = useCallback(
    (isActive: boolean, tag: string) => {
      if (isActive) {
        setFieldValue(
          "tags",
          values.tags.filter((activatedTags) => activatedTags !== tag),
        );
      } else if (values.tags.length !== 3) {
        setFieldValue("tags", [...values.tags, tag]);
      }
    },
    [values.tags.length],
  );

  return (
    <View style={{ rowGap: 32 }}>
      <LabelInput label="Name" value={values.name} onChangeText={handleChange("name")} />
      <TagsList tags={values.tags} handleTag={handleTag} />
      <WeeklyGoalBtn
        daysPerWeek={values.daysPerWeek}
        addDay={() => setFieldValue("daysPerWeek", ++values.daysPerWeek)}
        subtractDay={() => setFieldValue("daysPerWeek", --values.daysPerWeek)}
      />
      <PrimaryButton text="Add goal" variant="primary" onPress={() => handleSubmit()} disabled={!isValid} />
    </View>
  );
}
