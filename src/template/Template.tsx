import * as S from './styles'

import { Nav } from '../components/Nav/Nav';
interface ITemplateProps {
  children: React.ReactNode
}

export const Template = ({ children }: ITemplateProps) => {

  return (
    <S.Wrapper>
      {children}
      <Nav />
    </S.Wrapper>
  )
}

