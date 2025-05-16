import * as Yup from "yup";

export type AddGoalValuesType = Yup.InferType<typeof addGoalValidationSchema>;

export const addGoalInitValues: AddGoalValuesType = {
  name: "",
  tags: [],
  daysPerWeek: 1,
};

export const addGoalValidationSchema = Yup.object({
  name: Yup.string().required(),
  tags: Yup.array(Yup.string().required()).min(1).max(3).required(),
  daysPerWeek: Yup.number().min(1).max(7).required(),
});
