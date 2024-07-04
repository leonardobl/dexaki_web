import React, { ComponentProps } from "react";
import * as S from "./styles";
import { MainMenu } from "../../components/MainMenu";
import { Nav } from "../../components/Nav/Nav";

interface ILayout extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Layout = ({ children, ...rest }: ILayout) => {
  return (
    <S.Container {...rest}>
      <MainMenu />
      <S.Wrapper>{children}</S.Wrapper>
      <Nav />
    </S.Container>
  );
};
