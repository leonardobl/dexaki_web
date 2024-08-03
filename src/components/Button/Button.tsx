import { ComponentProps } from "react";
import * as S from "./styles";

export interface IButtonProps extends ComponentProps<"button"> {}

export const Button = (props: IButtonProps) => {
  return <S.Button {...props} />;
};
