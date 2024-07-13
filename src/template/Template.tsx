import * as S from "./styles";

import { Nav } from "../components/Nav/Nav";
interface ITemplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: ITemplateProps) => {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
      <S.ContentMenu>
        <Nav />
      </S.ContentMenu>
    </S.Wrapper>
  );
};
