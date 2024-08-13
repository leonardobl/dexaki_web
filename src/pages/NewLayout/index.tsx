import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";
import { MainMenu } from "../../components/MainMenu";
import { IParserCategory } from "../../types/product";
import { useNewLayout } from "./useNewLayout";
import { Nav } from "../../components/Nav/Nav";

interface INewLayoutProps extends ComponentProps<"div"> {
  children: ReactNode;
  categorys?: IParserCategory[];
}

export const NewLayout = ({
  children,
  categorys,
  ...rest
}: INewLayoutProps) => {
  const { pathname } = useNewLayout();

  return (
    <S.Container {...rest}>
      {pathname === "/" && <MainMenu categorys={categorys || []} />}
      <S.Wrapper>{children}</S.Wrapper>
      <Nav />
    </S.Container>
  );
};
