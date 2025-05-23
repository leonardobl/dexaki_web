import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";
import { MainMenu } from "../../components/MainMenu";
import { useNewLayout } from "./useNewLayout";
import { Nav } from "../../components/Nav/Nav";
import { ICategoryDTO } from "../../types/category";

interface INewLayoutProps extends ComponentProps<"div"> {
  children: ReactNode;
  categorys?: ICategoryDTO[];
}

export const NewLayout = ({
  children,
  categorys,
  ...rest
}: INewLayoutProps) => {
  const { pathname } = useNewLayout();

  console.log(categorys);

  return (
    <S.Container {...rest}>
      {pathname === "/" && <MainMenu categorys={categorys || []} />}
      <S.Wrapper>{children}</S.Wrapper>
      <Nav />
    </S.Container>
  );
};
