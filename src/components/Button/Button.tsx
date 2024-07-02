import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'outlined' | 'normal'
}

export const Button = ({ variant = 'normal', children, ...rest }: IProps) => {
  return (
    <S.Button
      {...rest}
      style={{ color: '#fff' }}
      variant={variant}
    >
      {children}
    </S.Button>
  )
}

