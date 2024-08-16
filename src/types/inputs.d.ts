import { ComponentProps } from "react";

export interface ISelectOptions<T> {
  value: string;
  label: string;
  element?: T;
}

interface InputCustomProps extends ComponentProps<"input"> {
  error?: string;
}
