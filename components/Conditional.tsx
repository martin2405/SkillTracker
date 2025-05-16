import { JSX } from "react";

interface ConditionalProps {
  condition: boolean;
  trueRender: JSX.Element;
  falseRender?: JSX.Element;
}

export default function Conditional({ condition, trueRender, falseRender }: ConditionalProps) {
  if (condition) return trueRender;
  return falseRender;
}
