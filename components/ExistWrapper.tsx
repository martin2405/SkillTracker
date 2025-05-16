import { JSX } from "react";

interface ExistWrapperProps<T> {
  item: T;
  renderItem: (item: NonNullable<T>) => JSX.Element;
  renderNullItem?: JSX.Element;
}

export default function ExistWrapper<T>({ item, renderItem, renderNullItem }: ExistWrapperProps<T>) {
  if (item) return renderItem(item);
  else return renderNullItem;
}
