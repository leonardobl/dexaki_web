import React, { ComponentProps } from "react";
import * as S from "./styles";
// import { MainMenu } from "../../components/MainMenu";
import { Nav } from "../../components/Nav/Nav";
import { useLayout } from "./useLayout";

interface ILayout extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Layout = ({ children, ...rest }: ILayout) => {
  const { dataDelivery } = useLayout();

  return (
    <S.Container {...rest}>
      {/* <MainMenu /> */}
      <S.Wrapper
        className="aqui"
        data-product={dataDelivery.products.length > 0}
      >
        {children}
      </S.Wrapper>
      <Nav />
    </S.Container>
  );
};
