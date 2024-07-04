import React, { ComponentProps } from "react";
import * as S from "./styles";
import { MainMenu } from "../../components/MainMenu";

interface ILayout extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Layout = ({ children, ...rest }: ILayout) => {
  return (
    <S.Container {...rest}>
      <MainMenu />
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};
