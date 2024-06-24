import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const Button = ({ children, ...rest }: IProps) => {
  return (
    <S.Button {...rest} style={{ color: '#fff' }}>{children}</S.Button>
  )
}

